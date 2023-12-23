import type { NextPage } from 'next';
import Container from '../components/Container';
import { getFolders } from '../lib/cloudinary';
import Link from 'next/link';
import Card from '../components/ProjectCard';
import { PhotoCards } from '@/components/PhotoCard/PhotoCard.styles';
import { useTheme } from 'styled-components';

type CustomFolder = {
  id: string;
  name: string;
  path: string;
  firstImage: string;
  showPhotoTitle: boolean;
  showCategory: boolean;
  type: string;
  color: string;
};

type FolderProps = {
  folders: CustomFolder[];
};

const Photo: NextPage<FolderProps> = ({ folders }) => {
  const theme = useTheme();
  return (
    <Container title='Photo'>
      <div className='headingLg'>Photo</div>

      <div className='photo-cards-container'>
        {folders &&
          folders.map((folder) => {
            const linkTitle = folder?.name
              ? folder?.name.charAt(0).toUpperCase() + folder?.name.slice(1)
              : '';
            const color =
              folder.type === 'Series'
                ? theme.categorySeries
                : folder.type === 'Album'
                ? theme.categoryAlbum
                : '';
            console.log('folder type:', folder.type);
            return (
              <div key={folder.id} className='photoCategory'>
                <PhotoCards>
                  <Link href={`/folder/${folder?.path}`} passHref>
                    <Card
                      image={folder?.firstImage}
                      showPhotoTitle={true}
                      showCategory={true}
                      categoryType={folder.type}
                      title={linkTitle}
                      color={color}
                    />
                  </Link>
                </PhotoCards>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Photo;

const folderCategories: { [key: string]: string } = {
  blind: 'Series',
  colour: 'Album',
};

const addCategoriesToFolders = (folders: CustomFolder[]) => {
  return folders.map((folder) => {
    const type = folderCategories[folder.name] || 'None';

    return {
      ...folder,
      type,
    };
  });
};

export async function getStaticProps() {
  const { folders = [] } = await getFolders();
  const addCategories = addCategoriesToFolders(folders);

  return {
    props: {
      folders: addCategories,
    },
  };
}
