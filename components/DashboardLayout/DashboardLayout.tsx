import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./DashboardLayout.styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
  toggleTheme: () => void;
};

export default function DashboardLayout({ children, toggleTheme }: DashboardLayoutProps) {

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <Content>
        <Sidebar toggleTheme={toggleTheme} />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
}
