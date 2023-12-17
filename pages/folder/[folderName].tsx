import { useState, MouseEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';
import { mapImageResources } from '../../lib/cloudinary';
import Container from '../../components/Container';

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
          nextCursor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const results = await response.json();
      const { resources, next_cursor: updatedNextCursor } = results;
      const mappedImages = mapImageResources(resources);

      setImages((prev) => [...prev, ...mappedImages]);
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
          body: JSON.stringify({}),
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

  return (
    <Container title='Folder Name'>
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
