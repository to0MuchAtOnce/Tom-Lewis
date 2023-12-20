import Link from "next/link"
import { FooterContainer } from "./Footer.styles";
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io5"

export default function Footer() {
  return (
    <FooterContainer>
      <Link
        href="https://www.linkedin.com/in/tom-lewis-a42566202/"
        className="FooterMenuItem footerIconColor"
        target="_blank"
        rel="noopener noreferrer">
        <IoLogoLinkedin />
      </Link>

      <Link
        href="https://github.com/to0MuchAtOnce/"
        className="FooterMenuItem footerIconColor"
        target="_blank"
        rel="noopener noreferrer">
        <IoLogoGithub />
      </Link>

      <Link
        href="https://twitter.com/UkkkirbTr/"
        className="FooterMenuItem footerIconColor"
        target='_blank'
        rel="noopener noreferrer">
        <IoLogoTwitter />
      </Link>
    </FooterContainer >
  );
}
