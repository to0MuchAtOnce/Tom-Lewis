import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import { useMediaQuery } from 'react-responsive';
import SidebarFooter from "../SidebarFooter"

import {LogoContainer} from "../Header/Header.styles";
import { SidebarFooterContainer } from "../SidebarFooter/SidebarFooter.styles";

export default function Sidebar () {
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 1210 });
  return (
    <SidebarContainer>
      <div>
        <LogoContainer>Logo</LogoContainer>
        <MenuItemsList options={MENU_ITEMS} />
      </div>

       <SidebarFooterContainer>
       {isLargeScreen ? <SidebarFooter/> : null}   
      </SidebarFooterContainer>
    </SidebarContainer>
  );
}
