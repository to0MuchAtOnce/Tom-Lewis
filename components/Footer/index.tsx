import Link from "next/link"
import { FooterContainer } from "./Footer.styles";
import { FooterLinkContainer } from "./Footer.styles";

export default function Footer() {
  return (
  <FooterContainer>
      <FooterLinkContainer>
        <Link href="#"><a className="FooterMenuItem">LinkedIn</a></Link>
        <Link href="#"><a className="FooterMenuItem">GitHub</a></Link>
        <Link href="#"><a className="FooterMenuItem">Twitter</a></Link>
      </FooterLinkContainer>
  </FooterContainer>
  )
}
