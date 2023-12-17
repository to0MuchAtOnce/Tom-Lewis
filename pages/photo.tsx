import type { NextPage } from 'next';
import Container from '../components/Container';
import { getFolders } from '../lib/cloudinary';
import Link from 'next/link';

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
  const { folders = [] } = await getFolders();

  return {
    props: {
      folders,
    },
  };
}
