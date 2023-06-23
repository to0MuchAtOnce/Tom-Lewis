import Link from "next/link"
import {SidebarFooterContainer, FlexContainer, SidebarFooterLinkContainer, ToggleThemeContainer} from "./SidebarFooter.styles";
import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter} from "react-icons/io5"
import {MdDarkMode} from 'react-icons/md'
import { IconContext } from "react-icons";

export default function SidebarFooter() {
  const IconColor = '#427fac';
  return (
      <SidebarFooterContainer>
        <FlexContainer>
        <SidebarFooterLinkContainer>
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
        </SidebarFooterLinkContainer>
</FlexContainer>
      
      <ToggleThemeContainer>
        <div><MdDarkMode/></div>
</ToggleThemeContainer>


    </SidebarFooterContainer>
    
  )
}
