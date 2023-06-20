import Link from "next/link"
import { FooterContainer } from "./Footer.styles";
import { FooterLinkContainer } from "./Footer.styles";

import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter} from "react-icons/io5"

export default function Footer() {
  return (
  <FooterContainer>
      <FooterLinkContainer>
        <Link href="#"><a className="FooterMenuItem"> <IoLogoLinkedin /></a></Link>
        <Link href="#"><a className="FooterMenuItem"> <IoLogoGithub/> </a></Link>
        <Link href="#"><a className="FooterMenuItem"><IoLogoTwitter/></a></Link>
      </FooterLinkContainer>
  </FooterContainer>
  )
}
