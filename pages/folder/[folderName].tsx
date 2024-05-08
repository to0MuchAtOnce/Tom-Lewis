import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from '@/components/Container';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import { PhotoContainer } from '../../styles/folderName.styles';
import BlindSeries from '@/components/BlindSeries';

type CustomImage = {
  id: string;
  title: string;
  width: number;
  height: number;
  image: string;
  folder: string;
};

type ImageProps = {
  images: CustomImage[];
};

const FolderName: NextPage<ImageProps> = ({ images: defaultImages }) => {
  const [images, setImages] = useState<CustomImage[]>(defaultImages ?? []);

  const router = useRouter();

  const { folderName } = router.query;

  useEffect(() => {
    (async function fetchImages() {
      try {
        const response = await fetch('/api/search', {
          method: 'POST',
          body: JSON.stringify({
            folderName: `${folderName}`,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const results = await response.json();
        const { resources } = results;
        const mappedImages = mapImageResources(resources);

        setImages(mappedImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [folderName]);

  if (folderName === 'blind') {
    return <BlindSeries folder={{ type: 'Series' }} />;
  }

  return (
    <Container title={`${folderName}`}>
      {images &&
        images.map((image?: CustomImage) => {
          return (
            <div key={image?.id}>
              <PhotoContainer>
                <a>
                  <Image
                    className='photo'
                    width={image?.width}
                    height={image?.height}
                    src={image?.image ?? ''}
                    alt=''
                  />
                </a>
              </PhotoContainer>
            </div>
          );
        })}
    </Container>
  );
};

export default FolderName;

export async function getStaticProps({
  params,
}: {
  params: { folderName: string };
}) {
  const results = await search({ folderName: params.folderName });

  const { resources } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images: images || null,
    },
  };
}

export async function getStaticPaths() {
  const data = await getFolders();
  const folders = data.folders || [];

  const paths = folders.map((folder: { name: string }) => ({
    params: { folderName: folder?.name },
  }));

  return {
    paths,
    fallback: true,
  };
}
