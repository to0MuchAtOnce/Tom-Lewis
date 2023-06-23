import Link from "next/link"
import {SidebarFooterContainer, FlexContainer, ToggleThemeContainer} from "./SidebarFooter.styles";
import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter} from "react-icons/io5"
import {MdDarkMode} from 'react-icons/md'
import { IconContext } from "react-icons";

export default function SidebarFooter() {
  const IconColor = '#427fac';
  const ThemeToggleColor = '#dedede'
  return (
      <SidebarFooterContainer>
        <FlexContainer>
        <Link href="#" passHref>
          <IconContext.Provider value={{className: 'SidebarFooterIcon', color: IconColor}}>
          <a className="SidebarFooterMenuItem"><IoLogoLinkedin/></a>
          </IconContext.Provider>
        </Link>

          <Link href="#" passHref>
            <IconContext.Provider value={{className: 'SidebarFooterIcon', color: IconColor}}>
            <a className="SidebarFooterMenuItem"><IoLogoGithub/></a> 
            </IconContext.Provider>
          </Link>
        
          <Link href="#" passHref>
            <IconContext.Provider value={{className: 'SidebarFooterIcon', color: IconColor}}>
            <a className="SidebarFooterMenuItem"><IoLogoTwitter/></a>
            </IconContext.Provider>
          </Link>
      </FlexContainer>
      
      <ToggleThemeContainer>
        <IconContext.Provider value={{className: 'FooterThemeIcon', color: ThemeToggleColor}}>
          <button className="FooterThemeToggleBtn"><MdDarkMode/></button>   
        </IconContext.Provider>
      </ToggleThemeContainer>
    </SidebarFooterContainer>
    
  )
}
