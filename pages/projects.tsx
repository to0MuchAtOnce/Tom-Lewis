import Head from 'next/head';
import type { NextPage } from 'next';
import { projects } from '../pages/api/ProjectsData';
import Card from '../components/ProjectCard';
import { Cards } from '@/components/ProjectCard/ProjectCard.styles';
import Container from '../components/Container';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Nextjs Dashboard Layout' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@UkkkirbTr' />
        <meta name='twitter:title' content='Projects' />
        <meta
          name='twitter:description'
          content='A collection of my dev projects'
        />
        <meta
          name='twitter:image'
          content='https://to0muchatonce.github.io/etch-a-sketch/'
        />
      </Head>
      <Container title='Projects'>
        <div className='headingLg'>Projects</div>
        <div className='cards-container'>
          {projects.map((project) => (
            <Cards key={project.id}>
              <Card
                title={project.title}
                content={project.content}
                link={project.link}
              />
            </Cards>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Projects;
