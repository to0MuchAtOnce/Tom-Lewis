import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import Footer from "../Footer"

import {LogoContainer} from "../Header/Header.styles";
import { FooterContainer } from "../Footer/Footer.styles";

export default function Sidebar () {
  return (
    <SidebarContainer>
      <LogoContainer>Logo</LogoContainer>
      <MenuItemsList options={MENU_ITEMS} />
          <div>Hello</div>

    </SidebarContainer>
  );
}
