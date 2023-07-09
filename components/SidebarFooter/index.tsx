import Link from "next/link"
import { MdDarkMode } from 'react-icons/md'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io5"
import { IconContext } from "react-icons";
import { SidebarFooterContainer, FlexContainer, ToggleThemeContainer } from "./SidebarFooter.styles";

type SidebarFooterProps = {
  toggleTheme: () => void;
};

export default function SidebarFooter({ toggleTheme }: SidebarFooterProps) {
  return (
    <SidebarFooterContainer>
      <FlexContainer>
        <Link href="https://www.linkedin.com/in/tom-lewis-a42566202/">
          <a className="SidebarFooterMenuItem footerIconColor" target="_blank"><IoLogoLinkedin /></a>
        </Link>

        <Link href="https://github.com/to0MuchAtOnce/">
          <a className="SidebarFooterMenuItem footerIconColor" target="_blank"><IoLogoGithub /></a>
        </Link>

        <Link href="#">
          <a className="SidebarFooterMenuItem footerIconColor"><IoLogoTwitter /></a>
        </Link>
      </FlexContainer>

      <ToggleThemeContainer>
        <IconContext.Provider value={{ className: 'FooterThemeIcon' }}>
          <button className="FooterThemeToggleBtn" onClick={toggleTheme}><MdDarkMode /></button>
        </IconContext.Provider>
      </ToggleThemeContainer>
    </SidebarFooterContainer>

  )
}
