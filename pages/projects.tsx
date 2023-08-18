import type { NextPage } from "next";
import { projects } from '../pages/api/ProjectsData';
import Card from '../components/ProjectCard'
import { CardContainer } from "@/components/ProjectCard/ProjectCard.styles";
import Container from "../components/Container";

const Projects: NextPage = () => {
  return (
    <Container title="Projects">
      <div className="headingLg">Projects</div>
      {projects.map((project, index) => (
        <CardContainer key={index}>
          <Card
            title={project.title}
            content={project.content}
            link={project.link}
          />
        </CardContainer>
      ))}
    </Container>
  );
};

export default Projects;
