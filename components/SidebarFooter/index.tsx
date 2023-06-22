import Link from "next/link"
import {SidebarFooterContainer} from "./SidebarFooter.styles";
import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter} from "react-icons/io5"
import { IconContext } from "react-icons";

export default function SidebarFooter() {
  const IconColor = '#427fac';
  return (
      <SidebarFooterContainer>
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
    </SidebarFooterContainer>
  )
}
