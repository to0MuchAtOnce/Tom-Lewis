import type, { NextPage } from "next";
import { GetStaticProps } from 'next';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import Container from "../../components/Container";


interface PostProps {
  postData: PostData;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
if (!params || typeof params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Post: NextPage<PostProps> = ({postData}) => {
  return ( 
    <Container title="Post">
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
  </Container>
  );
};

export default Post;