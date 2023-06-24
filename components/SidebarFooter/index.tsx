import Link from "next/link"
import { MdDarkMode } from 'react-icons/md'
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io5"
import { IconContext } from "react-icons";
import { SidebarFooterContainer, FlexContainer, ToggleThemeContainer } from "./SidebarFooter.styles";

type SidebarFooterProps = {
  toggleTheme: () => void;
};

export default function SidebarFooter({ toggleTheme }: SidebarFooterProps) {
  const IconColor = '#737373';
  const ThemeToggleColor = '#dedede'
  return (
    <SidebarFooterContainer>
      <FlexContainer>
        <Link href="#" passHref>
          <IconContext.Provider value={{ className: 'SidebarFooterIcon', color: IconColor }}>
            <a className="SidebarFooterMenuItem"><IoLogoLinkedin /></a>
          </IconContext.Provider>
        </Link>

        <Link href="#" passHref>
          <IconContext.Provider value={{ className: 'SidebarFooterIcon', color: IconColor }}>
            <a className="SidebarFooterMenuItem"><IoLogoGithub /></a>
          </IconContext.Provider>
        </Link>

        <Link href="#" passHref>
          <IconContext.Provider value={{ className: 'SidebarFooterIcon', color: IconColor }}>
            <a className="SidebarFooterMenuItem"><IoLogoTwitter /></a>
          </IconContext.Provider>
        </Link>
      </FlexContainer>

      <ToggleThemeContainer>
        <IconContext.Provider value={{ className: 'FooterThemeIcon', color: ThemeToggleColor }}>
          <button className="FooterThemeToggleBtn" onClick={toggleTheme}><MdDarkMode /></button>
        </IconContext.Provider>
      </ToggleThemeContainer>
    </SidebarFooterContainer>

  )
}
