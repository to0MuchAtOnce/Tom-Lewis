import Link from "next/link";
import { useRouter } from "next/router";
import { MdDarkMode } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  HeaderContainer,
  HeaderLinkContainer,
  LogoContainer,
} from "./Header.styles";

type HeaderProps = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  const router = useRouter();
  return (
    <HeaderContainer>
      <LogoContainer>Logo</LogoContainer>

      <HeaderLinkContainer>
        <Link href="/">
          <a className={`MobileMenuItem ${router.pathname === "/" ? "selected" : ""
            }`}>Blog</a>
        </Link>
        <Link href="/photo">
          <a className={`MobileMenuItem ${router.pathname === "/photo" ? "selected" : ""
            }`}>Photo</a>
        </Link>
        <Link href="/projects">
          <a className={`MobileMenuItem ${router.pathname === "/projects" ? "selected" : ""
            }`}>Projects</a>
        </Link>
        <Link href="/about">
          <a className={`MobileMenuItem ${router.pathname === "/about" ? "selected" : ""
            }`}>About</a>
        </Link>
        <IconContext.Provider
          value={{ className: "HeaderThemeIcon" }}
        >
          <button className="HeaderToggleThemeButton" onClick={toggleTheme}>
            <MdDarkMode />
          </button>
        </IconContext.Provider>
      </HeaderLinkContainer>
    </HeaderContainer >
  );
}
