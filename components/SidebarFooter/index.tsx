import Link from 'next/link';
import { MdDarkMode } from 'react-icons/md';
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import {
  SidebarFooterContainer,
  FlexContainer,
  ToggleThemeContainer,
} from './SidebarFooter.styles';

type SidebarFooterProps = {
  toggleTheme: () => void;
};

export default function SidebarFooter({ toggleTheme }: SidebarFooterProps) {
  return (
    <SidebarFooterContainer>
      <FlexContainer>
        <Link
          passHref
          href='https://www.linkedin.com/in/tom-lewis-a42566202/'
          className='SidebarFooterMenuItem footerIconColor'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoLinkedin />
        </Link>

        <Link
          passHref
          href='https://github.com/to0MuchAtOnce/'
          className='SidebarFooterMenuItem footerIconColor'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoGithub />
        </Link>

        <Link
          passHref
          href='https://twitter.com/UkkkirbTr/'
          className='SidebarFooterMenuItem footerIconColor'
          target='_blank'
          rel='noopener noreferrer'
        >
          <IoLogoTwitter />
        </Link>
      </FlexContainer>

      <ToggleThemeContainer>
        <IconContext.Provider value={{ className: 'FooterThemeIcon' }}>
          <button className='FooterThemeToggleBtn' onClick={toggleTheme}>
            <MdDarkMode />
          </button>
        </IconContext.Provider>
      </ToggleThemeContainer>
    </SidebarFooterContainer>
  );
}
