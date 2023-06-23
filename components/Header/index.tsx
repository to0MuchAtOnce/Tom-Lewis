import Link from "next/link";
import {MdDarkMode} from "react-icons/md"
import { IconContext } from "react-icons";
import {
  HeaderContainer,
  FlexContainer,
  HeaderLinkContainer,
  LogoContainer,
} from "./Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>Logo</LogoContainer>

      <FlexContainer>
      <HeaderLinkContainer className="MobileMenuWrapper">
        <Link href="/"><a className="MobileMenuItem">Blog</a></Link>
        <Link href="/photo"><a className="MobileMenuItem">Photo</a></Link>
        <Link href="/projects"><a className="MobileMenuItem">Projects</a></Link>
        <Link href="/about"><a className="MobileMenuItem">About</a></Link>
        <span className="MobileMenuItem"><MdDarkMode/></span>
      </HeaderLinkContainer>
    </FlexContainer>
    </HeaderContainer>
  );
}
