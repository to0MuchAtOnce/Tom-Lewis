import Link from "next/link";
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
      </HeaderLinkContainer>
    </FlexContainer>
    </HeaderContainer>
  );
}
