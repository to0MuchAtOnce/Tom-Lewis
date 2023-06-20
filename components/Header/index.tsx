import Link from "next/link";
import { Menu, ChevronLeft } from "@styled-icons/material";
import {
  HeaderContainer,
  IconContainer,
  FlexContainer,
  HeaderLinkContainer,
  LogoContainer,
} from "./Header.styles";

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};


export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      <LogoContainer>Logo</LogoContainer>
      </IconContainer>

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
