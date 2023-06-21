import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";

export default function Sidebar () {
  return (
    <SidebarContainer>
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  );
}
