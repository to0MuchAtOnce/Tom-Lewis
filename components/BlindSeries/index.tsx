import { NextPage } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Card from '@/components/ProjectCard';
import { PageLayoutContainer } from './BlindSeries.styles';
import { pageLayout } from '@/pages/api/BlindData';
import { PhotoCards } from '../PhotoCard/PhotoCard.styles';

type CustomData = {
  text: string;
  image: {
    id: string;
    title: string;
    width: number;
    height: number;
    image: string;
    customStyle: string;
  };
};

interface BlindSeriesProps {
  images?: CustomData[];
  categoryType?: string;
  folder: { type: string };
}

const BlindSeries: NextPage<BlindSeriesProps> = ({ folder }) => {
  const smallImages: any[] = [];
  const newPageLayout = pageLayout.reduce((acc, block) => {
    if (
      block.type === 'image' &&
      typeof block.content !== 'string' &&
      block.content.customStyle === 'smallImage'
    ) {
      smallImages.push(block);
      if (smallImages.length === 1) {
        acc.push({ type: 'smallImages', content: smallImages });
      }
    } else {
      acc.push(block);
    }
    return acc;
  }, [] as any[]);

  return (
    <Container title='Blind'>
      <PageLayoutContainer>
        <div className='headingLg'>Blind</div>
        <PhotoCards>
          <Card categoryType={folder.type} title='Series' showCategory={true} />
        </PhotoCards>
        {newPageLayout.map((block, index) => {
          if (block.type === 'text') {
            return <p key={`${block.type}-${index}`}>{block.content}</p>;
          } else if (block.type === 'image') {
            const image = block.content as {
              id: string;
              title: string;
              width: number;
              height: number;
              image: string;
              customStyle?: string;
            };
            return (
              <div className='largeImageContainer'>
                <div key={image.id}>
                  <Image
                    className={`${image.customStyle || ''}`}
                    src={image.image}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                  />
                </div>
              </div>
            );
          } else if (block.type === 'smallImages') {
            return (
              <div
                key={`${block.type}-${index}`}
                className='smallImageContainer'
              >
                {block.content.map((imageBlock: any) => {
                  const image = imageBlock.content as {
                    id: string;
                    title: string;
                    width: number;
                    height: number;
                    image: string;
                    customStyle?: string;
                  };
                  return (
                    <Image
                      className={`${image.customStyle || ''}`}
                      key={`${block.type}-${image.id}`}
                      src={image.image}
                      alt={image.title}
                      width={image.width}
                      height={image.height}
                    />
                  );
                })}
              </div>
            );
          }
        })}
      </PageLayoutContainer>
    </Container>
  );
};
export default BlindSeries;
