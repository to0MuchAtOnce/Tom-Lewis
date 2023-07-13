import { useState, MouseEvent } from "react";
import type { NextPage } from "next";
import Image from 'next/image';
import Container from "../components/Container";
import { search, mapImageResources } from "../lib/cloudinary";

type Image = {
  id: string;
  title: string;
  width: number;
  height: number;
  image: string;
};

type ImageProps = {
  images: Image[];
  nextCursor: string;
};

const Photo: NextPage<ImageProps> = ({ images: defaultImages, nextCursor: defaultNextCursor }) => {
  const [images, setImages] = useState<Image[]>(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  console.log('nextCursor', nextCursor)
  console.log('images', images)

  async function handleLoadMore(event: MouseEvent<HTMLButtonElement>): Promise<void> {
    event.preventDefault();
    const results = await fetch('api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor
      })
    }).then(res => res.json())
    const { resources, next_cursor: updatedNextCursor } = results;

    const images = mapImageResources(resources);

    setImages(prev => {
      return [
        ...prev,
        ...images
      ]
    })

    setNextCursor(updatedNextCursor);
  }

  return (
    <Container title="Photo">
      <div className="headingLg">Photos</div>
      {images.map((image: Image) => {
        return (
          <div key={image.id}>
            <a>
              <Image
                width={image.width} height={image.height} src={image.image} alt=""
              />
            </a>
            <h3>{image.id}</h3>
          </div>
        )
      })}
      <p>
        <button onClick={handleLoadMore}>Load more</button>
      </p>
    </Container>
  )
};

export default Photo;

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor,
    }
  }
}

