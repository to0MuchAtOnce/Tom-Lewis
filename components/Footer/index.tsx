import Link from "next/link"
import { FooterContainer } from "./Footer.styles";
import { FooterLinkContainer } from "./Footer.styles";

import {IoLogoLinkedin, IoLogoGithub, IoLogoTwitter} from "react-icons/io5"
import { IconContext } from "react-icons";

export default function Footer() {
  const IconColor = '#427fac';
  return (
  <FooterContainer>
      <FooterLinkContainer>

        <Link href="#" passHref>
          <IconContext.Provider value={{className: 'FooterIcon', color: IconColor}}>
          <a className="FooterMenuItem"><IoLogoLinkedin/></a>
          </IconContext.Provider>
        </Link>

          <Link href="#" passHref>
            <IconContext.Provider value={{className: 'FooterIcon', color: IconColor}}>
            <a className="FooterMenuItem"><IoLogoGithub/></a> 
            </IconContext.Provider>
          </Link>
        
          <Link href="#" passHref>
            <IconContext.Provider value={{className: 'FooterIcon', color: IconColor}}>
            <a className="FooterMenuItem"><IoLogoTwitter/></a>
            </IconContext.Provider>
          </Link>
      </FooterLinkContainer>
  </FooterContainer>
  )
}
