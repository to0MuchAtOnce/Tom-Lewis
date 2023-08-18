import type { NextPage } from "next";
import { projects } from '../pages/api/ProjectsData';
import Card from '../components/ProjectCard'
import { Cards } from "@/components/ProjectCard/ProjectCard.styles";
import Container from "../components/Container";

const Projects: NextPage = () => {
  return (
    <Container title="Projects">
      <div className="headingLg">Projects</div>
      <div className="cards-container">
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
  );
};

export default Projects;
