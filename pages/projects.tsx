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
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@UkkkirbTr' />
        <meta name='twitter:title' content='Projects' />
        <meta
          name='twitter:description'
          content='A collection of my dev projects'
        />
        <meta
          name='twitter:image'
          content='https://drive.google.com/file/d/1WVvvARXYeqEtH_e92_RJp8rioWi-xGmd/view?usp=drive_link'
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
