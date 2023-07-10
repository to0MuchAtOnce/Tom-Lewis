import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import SidebarFooter from "../SidebarFooter"

import { SidebarFooterContainer } from "../SidebarFooter/SidebarFooter.styles";
import { SidebarLogo } from "../Header/Header.styles";

type SidebarProps = {
  toggleTheme: () => void;
};

export default function Sidebar({ toggleTheme }: SidebarProps) {
  return (
    <SidebarContainer>
      <div>
        <SidebarLogo>Tom Lewis <span className="LogoFullStop">.</span></SidebarLogo>
        <MenuItemsList options={MENU_ITEMS} />
      </div>
      <SidebarFooterContainer>
        <SidebarFooter toggleTheme={toggleTheme} />
      </SidebarFooterContainer>
    </SidebarContainer >
  );
}
