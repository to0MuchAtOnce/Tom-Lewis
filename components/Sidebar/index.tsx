import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import SidebarFooter from "../SidebarFooter"

import {LogoContainer} from "../Header/Header.styles";
import { SidebarFooterContainer } from "../SidebarFooter/SidebarFooter.styles";

export default function Sidebar () {
  return (
    <SidebarContainer>
      <div>
        <LogoContainer>Logo</LogoContainer>
        <MenuItemsList options={MENU_ITEMS} />
      </div>

       <SidebarFooterContainer>
       <SidebarFooter/>   
      </SidebarFooterContainer>
    </SidebarContainer>
  );
}
