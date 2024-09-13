import { SubLayoutProps } from '@/types/common/layout';
import Container from './Container';
import Layout from './Layout';
import NavBar from './NavBar';
import SubHeader from './SubHeader';
import React from 'react';

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */

function SubLayout({
  children,
  isSearch = false,
  headerColor = '#fff',
  isPaddingZero = false,
}: React.PropsWithChildren<Readonly<SubLayoutProps>>) {
  const [headerChildren, containerChildren] = React.Children.toArray(children);
  return (
    <Layout>
      <SubHeader headerColor={headerColor} isSearch={isSearch}>
        {headerChildren}
      </SubHeader>
      <Container isPaddingZero={isPaddingZero}>{containerChildren}</Container>
      <NavBar />
    </Layout>
  );
}

export default SubLayout;
