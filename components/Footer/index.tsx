import Link from "next/link"
import { FooterContainer } from "./Footer.styles";
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io5"

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="https://www.linkedin.com/in/tom-lewis-a42566202/" passHref>
        <a target="_blank" className="FooterMenuItem FooterIcon"><IoLogoLinkedin /></a>
      </Link>

      <Link href="https://github.com/to0MuchAtOnce/" passHref>
        <a target='_blank' className="FooterMenuItem FooterIcon"><IoLogoGithub /></a>
      </Link>

      <Link href="#" passHref>
        <a className="FooterMenuItem FooterIcon"><IoLogoTwitter /></a>
      </Link>
    </FooterContainer >
  )
}
