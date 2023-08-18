import Link from "next/link"
import { FooterContainer } from "./Footer.styles";
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io5"

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="https://www.linkedin.com/in/tom-lewis-a42566202/">
        <a className="FooterMenuItem footerIconColor" target="_blank" rel="noopener noreferrer" ><IoLogoLinkedin /></a>
      </Link>

      <Link href="https://github.com/to0MuchAtOnce/">
        <a className="FooterMenuItem footerIconColor" target="_blank" rel="noopener noreferrer" ><IoLogoGithub /></a>
      </Link>

      <Link href="https://twitter.com/UkkkirbTr/">
        <a className="FooterMenuItem footerIconColor" target='_blank' rel="noopener noreferrer" ><IoLogoTwitter /></a>
      </Link>
    </FooterContainer >
  )
}
