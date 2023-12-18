import type { NextPage } from 'next';
import Container from '../components/Container';
import { getFolders } from '../lib/cloudinary';
import Link from 'next/link';
import Card from '../components/ProjectCard';
import { Cards } from '@/components/ProjectCard/ProjectCard.styles';

type CustomFolder = {
  name: string;
  path: string;
};

type FolderProps = {
  folders: CustomFolder[];
};

const Photo: NextPage<FolderProps> = ({ folders }) => {
  return (
    <Container title='Photo'>
      <div className='headingLg'>Photo</div>

      <ul className='photo-cards-container'>
        {folders &&
          folders.map((folder) => {
            const linkTitle =
              folder?.name.charAt(0).toUpperCase() + folder?.name.slice(1);
            return (
              <Cards key={folder?.name}>
                <Link href={`/folder/${folder?.path}`} passHref>
                  <a>
                    <Card
                      image='/images/blue-dot.png'
                      title={folder?.name}
                      path={folder?.path}
                    >
                      <li className='list' key={folder?.path}>
                        {linkTitle}
                      </li>
                    </Card>
                  </a>
                </Link>
              </Cards>
            );
          })}
      </ul>
    </Container>
  );
};

export default Photo;

export async function getStaticProps() {
  const { folders = [] } = await getFolders();

  return {
    props: {
      folders,
    },
  };
}
