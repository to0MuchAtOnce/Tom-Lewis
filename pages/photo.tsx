import type { NextPage } from "next";
import Image from 'next/image';
import Container from "../components/Container";
import { search, mapImageResources } from "../lib/cloudinary";

type Image = {
  id: string;
  title: string;
  link: string;
  width: number;
  height: number;
  image: string;
};

type ImageProps = {
  images: Image[];
  nextCursor: string;
};

const Photo: NextPage<ImageProps> = ({ images, nextCursor }) => {
  console.log('nextCursor', nextCursor)
  console.log('images', images)
  return (
    <Container title="Photo">
      <div className="headingLg">Photos</div>
      {images.map((image: Image) => {
        return (
          <div key={image.id}>
            <a href={image.link}>
              <Image
                width={image.width} height={image.height} src={image.image} alt=""
              />
            </a>
            <h3>{image.title}</h3>
          </div>
        )
      })}
    </Container>
  )
};

export default Photo;

interface Resource {
  asset_id: string;
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;
  // console.log("results", results)
  const images = mapImageResources(resources);

  return {
    props: {
      images,
      nextCursor,
    }
  }
}

