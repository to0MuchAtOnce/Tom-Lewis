import type { NextPage, GetStaticProps } from "next";
import Container from "../components/Container";

import { getSortedPostsData, PostData } from '../lib/posts';

interface HomeProps {
  allPostsData: PostData[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: NextPage<HomeProps> = ({allPostsData}) => {
  return (
    <Container title="Blog">
  <section className={"headingMd padding1px"}>
        <h2 className="headingLg">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default Home;
