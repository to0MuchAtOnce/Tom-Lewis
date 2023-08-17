import type { NextPage } from "next";
import { projects } from '../pages/api/ProjectsData';
import Card from '../components/ProjectCard'
import Container from "../components/Container";

const Projects: NextPage = () => {
  return (
    <Container title="Projects">
      <div className="headingLg">Projects</div>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          content={project.content}
          link={project.link}
        />
      ))}
    </Container>
  );
};

export default Projects;
