import type { NextPage } from "next";
import Container from "../components/Container";
// import { fetchS3File } from '../lib/s3';

interface ImageProps {
  imageData: string | null;
}

const Photo: NextPage<ImageProps> = ({ imageData }) => {
  return (
    <Container title="Photo">
      <div className="headingLg">Photo</div>
      {/* {imageData ? (
        <img src={`data:image/jpeg;base64,${imageData}`} alt="Profile Pic" />
      ) : (
        <div>No image available</div>
      )} */}
    </Container>
  );
};

// export async function getServerSideProps() {
//   const bucketName = 'toms-photos';
//   const key = 'profile-pic.jpg';

//   try {
//     const data = await fetchS3File(bucketName, key);
//     const imageData = data.Body || null;

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