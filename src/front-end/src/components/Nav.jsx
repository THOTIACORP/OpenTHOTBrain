import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, List, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, CrownOutlined, DollarCircleOutlined } from '@ant-design/icons'; // Importe o ícone de pesquisa
import LandingPage from '../pages/LandingPage';
import TextAnalysisPage from '../pages/TextAnalysisPage';
import NumericalAnalysis from '../pages/NumericalAnalysis';
import DatabaseConfigForm from '../pages/DatabaseConfigForm';

const { Header, Content, Sider } = Layout;

const MenuItems = ({ selectedMenuItem, handleMenuClick }) => {
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[selectedMenuItem]} onClick={({ key }) => handleMenuClick(key)}>
      <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="database"><Link to="/database">Database</Link></Menu.Item>
      <Menu.Item key="numeric-analysis"><Link to="/numeric-analysis">Numerical Analysis</Link></Menu.Item>
      <Menu.Item key="text-analysis"><Link to="/text-analysis">Text Analysis</Link></Menu.Item>
      <Menu.Item key="text-analysis"><Link to="/text-analysis">Wiki</Link></Menu.Item>
    </Menu>
  );
};

const Routes = ({ selectedMenuItem }) => {
  return (
    <Content style={{ margin: '16px' }}>
      {selectedMenuItem === 'home' && <LandingPage />}
      {selectedMenuItem === 'database' && <DatabaseConfigForm />}
      {selectedMenuItem === 'numeric-analysis' && <NumericalAnalysis />}
      {selectedMenuItem === 'text-analysis' && <TextAnalysisPage />}
    </Content>
  );
};

const Nav = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('home');
  const [searchText, setSearchText] = useState('');

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredItems = ['home', 'database', 'numeric-analysis', 'text-analysis']
    .filter((item) => item.includes(searchText));

  return (
    <Layout style={{ minHeight: '100vh' }}>
     <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div className="demo-logo" />
  <div style={{ flex: 1, display: 'flex', justifyContent: 'start', marginLeft:'-45px' }}>
    <Input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={handleSearchChange}
      style={{ width: '400px', marginRight: '26px', height: '50px' }}
      prefix={<SearchOutlined />}
    />
  </div>
  <Menu
    theme="dark"
    mode="horizontal"
    selectedKeys={[selectedMenuItem]}
    onClick={({ key }) => handleMenuClick(key)}
    style={{ minWidth: 0 }}
  >
    <Menu.Item key="adquirir-premium" icon={<CrownOutlined />}>
      <Link to="/adquirir-premium">Adquirir Premium</Link>
    </Menu.Item>
    <Menu.Item key="fazer-doacao" icon={<DollarCircleOutlined />}>
      <Link to="/fazer-doacao">Fazer Doação</Link>
    </Menu.Item>
  </Menu>
</Header>

      <Layout>
        <Sider>
          <MenuItems selectedMenuItem={selectedMenuItem} handleMenuClick={handleMenuClick} />
        </Sider>
        <Layout>
          <Breadcrumb style={{ margin: '23px 30px' }}>
            <Breadcrumb.Item>
              <Link to="/">{selectedMenuItem.charAt(0).toUpperCase() + selectedMenuItem.slice(1)}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Divider type="vertical" style={{ background: '#000', height: '2px', margin: '0 18px' }} />

          <Routes selectedMenuItem={selectedMenuItem} />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Nav;
