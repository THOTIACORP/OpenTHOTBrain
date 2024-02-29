import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LandingPage } from '../pages/LandingPage';
import { TextAnalysisPage } from '../pages/TextAnalysisPage';
import NumericalAnalysis from '../pages/NumericalAnalysis';
import DatabaseConfigForm from '../pages/DatabaseConfigForm';

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: 'home', label: 'Home', component: <LandingPage /> },
  { key: 'database', label: 'Data Base', component: <DatabaseConfigForm /> },
  { key: 'numeric-analysis', label: 'Analysis Numerics', component: <NumericalAnalysis /> },
  { key: 'text-analysis', label: 'Analysis Text', component: <TextAnalysisPage /> },
];

export const Nav = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(navItems[0].key);

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  const renderComponent = () => {
    const selectedItem = navItems.find(item => item.key === selectedMenuItem);
    return selectedItem ? selectedItem.component : null;
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
        >
          {navItems.map(item => (
            <Menu.Item key={item.key}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {navItems.map(item => (
            <Breadcrumb.Item key={item.key}>
              {item.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div style={{ background: colorBgContainer, minHeight: 280, padding: 24, borderRadius: borderRadiusLG }}>
          {renderComponent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
};

export default Nav;
