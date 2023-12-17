import { useState, MouseEvent, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from '../../components/Container';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';

type CustomImage = {
  id: string;
  title: string;
  width: number;
  height: number;
  image: string;
};

type ImageProps = {
  images: CustomImage[];
  nextCursor: string;
};

const FolderName: NextPage<ImageProps> = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) => {
  const [images, setImages] = useState<CustomImage[]>(defaultImages ?? []);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const { folderName } = router.query;

  async function handleLoadMore(
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          folderName,
          nextCursor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const results = await response.json();
      const { resources, next_cursor: updatedNextCursor } = results;
      const mappedImages = mapImageResources(resources);

      const newImages = mappedImages.filter(
        (newImage) => !images.find((image) => image.id === newImage.id)
      );

      console.log('newImages', newImages);

      setImages((prev) => [...prev, ...newImages]);
      setNextCursor(updatedNextCursor);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data. Please try again.');
    }
  }

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
  }, []);

  return (
    <Container title={`${folderName}`}>
      {images &&
        images.map((image?: CustomImage) => {
          return (
            <div key={image?.id}>
              <a>
                <Image
                  width={image?.width}
                  height={image?.height}
                  src={image?.image ?? ''}
                  alt=''
                />
              </a>
              <h3>{image?.title}</h3>
            </div>
          );
        })}
      <p>
        <button onClick={handleLoadMore}>Load more</button>
      </p>
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

  const { resources, next_cursor: nextCursor } = results;
  console.log('resources', resources);

  const images = mapImageResources(resources);

  return {
    props: {
      images: images || null,
      nextCursor: (nextCursor as string) || null,
    },
  };
}

export async function getStaticPaths() {
  const data = await getFolders();
  console.log('data', data);
  const folders = data.folders || [];

  const paths = folders.map((folder: { name: string }) => ({
    params: { folderName: folder?.name },
  }));

  return {
    paths,
    fallback: true,
  };
}
