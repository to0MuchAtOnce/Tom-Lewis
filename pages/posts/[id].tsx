import type, { NextPage } from "next";
import { GetStaticProps } from 'next';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import Container from "../../components/Container";
import Date from '../../components/Date';
import { PostContainer } from '../../styles/Post.styles'


export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (!params || typeof params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const postData = await getPostData(params.id);
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

interface PostProps {
  postData: PostData;
}

const Post: NextPage<PostProps> = ({ postData }) => {
  return (
    <Container title={postData.title}>
      <h1 className='headingXl'>{postData.title}</h1>
      <article>
        <br />
        <div className='PostDate'>
          <Date dateString={postData.date} />
        </div>
        <br />
        <PostContainer className="postText" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Container>
  );
};


export default Post;