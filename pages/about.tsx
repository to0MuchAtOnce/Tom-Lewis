import Link from "next/link";
import { NextPage } from "next";
import Container from "../components/Container";

const About: NextPage = () => {
  return (
    <Container title="About">
      <div className="headingLg">About Me</div>
      <div>
        I’m Tom, an aspiring web developer who likes to create interesting projects for web & mobile in React & React Native; check them out on the <a className="textLink" href="./projects">projects</a> page.
        <p>Here is a place where you can view my latest work, in a ‘learn in public’ kind of way. I have a <a className="textLink" href="./blog">blog</a>  section, where I like to cover topics that I find interesting or problems i’ve had a hard time solving, it’s a place that I can refer back to when I encounter similar problems in the future. You may find something there of interest.</p>

        <p>The <a className="textLink" href="./photo">photo</a> page is a collection photography work which is also something i’m passionate about.</p>

        <p>Minimalistic design, and intuitive functionality are two things that are very important to me when i’m working on a project. I built this site using next.js, TypeScript and styled components.</p>
      </div>
      <div className="headingMd">Contact</div>
      <p>I’m always interested to connect with people in the field, so feel free to contact me. You can find my social media links below, or send me an email: <span className="email">tom.lewis488</span>  at <span className="email">gmail.com</span> </p>
    </Container>
  );
};

export default About;
