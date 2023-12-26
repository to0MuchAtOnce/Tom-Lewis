import { NextPage } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import { PageLayoutContainer } from './BlindSeries.styles';

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
}

const pageLayout = [
  {
    type: 'text',
    content:
      'Qui ullam doloribus quos. Exercitationem odio qui placeat voluptatem et in repellendus. Corrupti omnis modi officia sed debitis nobis ut. Rerum eveniet et est earum doloremque et odit dolores illum. Blanditiis non quo qui illum occaecati. Dolore et numquam cupiditate recusandae quis. Culpa et repudiandae. Est expedita numquam excepturi ut. Enim rerum sunt ut molestiae minima laboriosam. Qui ut dolores assumenda natus eaque ipsa facilis. Dignissimos suscipit omnis et officiis molestias placeat alias adipisci neque. Libero aut iure totam illum iusto perspiciatis qui. Rem sit et ratione non. Illum reprehenderit enim iste quo assumenda reiciendis. Sunt eum qui. Expedita in laboriosam.',
  },
  {
    type: 'image',
    content: {
      id: '1',
      title: 'First Image',
      width: 4000,
      height: 4000,
      image:
        'https://res.cloudinary.com/tomlewisphoto/image/upload/v1702737562/blind/DSC_0883_bya6as.jpg',
      customStyle: 'largeImage',
    },
  },
  {
    type: 'text',
    content:
      'Qui ullam doloribus quos. Exercitationem odio qui placeat voluptatem et in repellendus. Corrupti omnis modi officia sed debitis nobis ut. Rerum eveniet et est earum doloremque et odit dolores illum. Blanditiis non quo qui illum occaecati. Dolore et numquam cupiditate recusandae quis. Culpa et repudiandae. Est expedita numquam excepturi ut. Enim rerum sunt ut molestiae minima laboriosam. Qui ut dolores assumenda natus eaque ipsa facilis. Dignissimos suscipit omnis et officiis molestias placeat alias adipisci neque. Libero aut iure totam illum iusto perspiciatis qui. Rem sit et ratione non. Illum reprehenderit enim iste quo assumenda reiciendis. Sunt eum qui. Expedita in laboriosam.Dignissimos suscipit omnis et officiis molestias placeat alias adipisci neque. Libero aut iure totam illum iusto perspiciatis qui. Rem sit et ratione non. Illum reprehenderit enim iste quo assumenda reiciendis. Sunt eum qui. Expedita in laboriosam.',
  },
  {
    type: 'image',
    content: {
      id: '2',
      title: 'Second Image',
      width: 4000,
      height: 4000,
      image:
        'https://res.cloudinary.com/tomlewisphoto/image/upload/v1702736508/blind/sjt6vzbz5kxym3zbg1cp.jpg',
      customStyle: 'largeImage',
    },
  },
  {
    type: 'image',
    content: {
      id: '3',
      title: 'First Image small',
      width: 500,
      height: 500,
      image:
        'https://res.cloudinary.com/tomlewisphoto/image/upload/v1702735040/blind/ljddhbbelngwf4efztoz.jpg',
      customStyle: 'smallImage',
    },
  },
  {
    type: 'image',
    content: {
      id: '4',
      title: 'Second Image small',
      width: 500,
      height: 500,
      image:
        'https://res.cloudinary.com/tomlewisphoto/image/upload/v1702735034/blind/xekd4ubaekjfljehnnws.jpg',
      customStyle: 'smallImage',
    },
  },
  {
    type: 'image',
    content: {
      id: '5',
      title: 'Third Image small',
      width: 500,
      height: 500,
      image:
        'https://res.cloudinary.com/tomlewisphoto/image/upload/v1702735023/blind/eta8j4rwkpdaad0rs6hs.jpg',
      customStyle: 'smallImage',
    },
  },
  {
    type: 'text',
    content:
      'Qui ullam doloribus quos. Exercitationem odio qui placeat voluptatem et in repellendus. Corrupti omnis modi officia sed debitis nobis ut. Rerum eveniet et est earum doloremque et odit dolores illum. Blanditiis non quo qui illum occaecati. Dolore et numquam cupiditate recusandae quis. Culpa et repudiandae. Est expedita numquam excepturi ut. Enim rerum sunt ut molestiae minima laboriosam. Qui ut dolores assumenda natus eaque ipsa',
  },
  {
    type: 'image',
    content: {
      id: '6',
      title: 'Third Image',
      width: 4000,
      height: 4000,
      image:
        'https://res.cloudinary.com/tomlewisphoto/image/upload/v1702735029/blind/gbwv2dcfrmcrtdxjvxva.jpg',
      customStyle: 'largeImage',
    },
  },
];

const BlindSeries: NextPage<BlindSeriesProps> = () => {
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
              <div key={image.id}>
                <Image
                  className={`${image.customStyle || ''}`}
                  src={image.image}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                />
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
