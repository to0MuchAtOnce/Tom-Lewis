import type { NextPage } from 'next';
import Container from '../components/Container';
import { getFolders } from '../lib/cloudinary';
import Link from 'next/link';
import Card from '../components/ProjectCard';
import { PhotoCards } from '@/components/PhotoCard/PhotoCard.styles';

type CustomFolder = {
  id: string;
  name: string;
  path: string;
  firstImage: string;
  type: string;
};

type FolderProps = {
  folders: CustomFolder[];
};

const Photo: NextPage<FolderProps> = ({ folders }) => {
  return (
    <Container title='Photo'>
      <div className='headingLg'>Photo</div>

      <div className='photo-cards-container'>
        {folders &&
          folders
            .filter((folder) => {
              console.log(folder.name); // Log each folder name before filtering
              return folder.name !== 'blog-images';
            })
            .map((folder) => {
              const linkTitle = folder?.name
                ? folder?.name.charAt(0).toUpperCase() + folder?.name.slice(1)
                : '';
              return (
                <div key={folder.name}>
                  <PhotoCards>
                    <Link href={`/folder/${folder?.path}`} passHref>
                      <Card
                        image={folder?.firstImage}
                        showPhotoTitle={true}
                        showCategory={true}
                        categoryType={folder.type}
                        title={linkTitle}
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
