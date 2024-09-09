import { MainLayoutProps } from '@/types/common';
import Container from './Container';
import Layout from './Layout';
import LogoHeader from './LogoHeader';
import NavBar from './NavBar';

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */

function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <Layout>
      <LogoHeader />
      <Container>{children}</Container>
      <NavBar />
    </Layout>
  );
}

export default MainLayout;
