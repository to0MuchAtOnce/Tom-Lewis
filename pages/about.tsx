import Link from "next/link";
import { NextPage } from "next";
import Container from "../components/Container";

const About: NextPage = () => {
  return (
    <Container title="About">
      <div className="headingLg">About Me</div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat expedita quas doloremque aliquam quos quia sed magnam consectetur numquam, recusandae facilis alias eaque quisquam suscipit iusto vero. Minus eveniet reiciendis, libero voluptates quasi odio deserunt at tempora ducimus modi id provident eum ut porro aperiam quo voluptate culpa eligendi earum!</div>
      <div className="headingMd">Contact</div>
      <Link href="#">Link</Link>
    </Container>
  );
};

export default About;
