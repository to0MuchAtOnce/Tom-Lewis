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
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@UkkkirbTr' />
        <meta name='twitter:title' content='Projects' />
        <meta
          name='twitter:description'
          content='A place where you can keep up to date with my latest work'
        />
        <meta name='twitter:image' content='/public/images/blue-dot.png' />
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
                showView={true}
              />
            </Cards>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Projects;
