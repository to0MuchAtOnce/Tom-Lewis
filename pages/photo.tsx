import type { NextPage } from "next";
import Image from 'next/image';
import Container from "../components/Container";
// import { fetchS3File } from '../lib/s3';

interface ImageProps {
  imageData: string[] | null;
}

const Photo: NextPage<ImageProps> = ({ imageData }) => {
  return (
    <Container title="Photo">
      <div className="headingLg">Photos</div>
      {imageData ? (
        imageData.map((image: string | null, index: number) => (
          image ? (
            <Image
              key={index}
              src={`data:image/jpeg;base64,${image}`}
              alt={`pexels-image-${index}`}
              width={1080}
              height={780}
            />
          ) : (
            <div key={index}>No image available</div>
          )
        ))
      ) : (
        <div>No images available</div>
      )}
    </Container>
  );
};

// export async function getServerSideProps() {
//   const bucketName = 'toms-photos';
//   const keys = ['pexels-bri-schneiter-346529.jpg', 'pexels-simon-berger-1323550.jpg', 'pexels-vittorio-staffolani-1606328.jpg'];

//   try {
//     const dataPromises = keys.map((key: string) => fetchS3File(bucketName, key));
//     const dataResults = await Promise.allSettled(dataPromises);

//     const imageData = dataResults.map((result: PromiseSettledResult<{ Body: string | undefined; }>) => {
//       if (result.status === 'fulfilled') {
//         return result.value.Body || null;
//       }
//       return null;
//     });

//     return {
//       props: {
//         imageData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching file:', error);
//     return {
//       props: {
//         imageData: null,
//       },
//     };
//   }
// }

export default Photo;