import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Container from '../components/Container';
import { search, mapImageResources, getFolders } from '../lib/cloudinary';
import Link from 'next/link';

type CustomImage = {
  id: string;
  title: string;
  width: number;
  height: number;
  image: string;
};

type CustomFolder = {
  name: string;
  path: string;
};

type ImageProps = {
  images: CustomImage[];
  nextCursor: string;
  folders: CustomFolder[];
};

const Photo: NextPage<ImageProps> = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}) => {
  const [images, setImages] = useState<CustomImage[]>(defaultImages ?? []);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function run() {
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
    })();
  });

  return (
    <Container title='Folders'>
      <div className='headingLg'>Folders</div>

      <ul>
        {folders &&
          folders.map((folder?: CustomFolder) => {
            return (
              <li key={folder?.path}>
                <Link href={`/folder/${folder?.path}`}>
                  <a>{folder?.name}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default Photo;

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);
  const { folders } = await getFolders();

  return {
    props: {
      images: images || null,
      nextCursor: (nextCursor as string) || null,
      folders,
    },
  };
}
