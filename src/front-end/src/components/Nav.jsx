import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Input, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined, CrownOutlined, DollarCircleOutlined } from '@ant-design/icons'; // Importe o ícone de pesquisa


const { Header, Sider } = Layout;

const MenuItems = ({ selectedMenuItem, handleMenuClick }) => {
  return (
    <Menu theme="dark" mode="inline" selectedKeys={[selectedMenuItem]} onClick={({ key }) => handleMenuClick(key)}>
      <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="database"><Link to="/DatabaseConfigForm">Dados</Link></Menu.Item>
      <Menu.Item key="text-analysis"><Link to="/text-analysis">Wiki</Link></Menu.Item>
    </Menu>
  );
};



const Nav = ({ render }) => {
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
    <Layout style={{ minHeight: '100vh', minWidth: '100vh', padding:'0px  ' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="demo-logo" />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'start', marginLeft: '-45px' }}>
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
          <Menu.Item key="pricing" icon={<CrownOutlined />}>
            <Link to="/pricing">Adquirir Premiun</Link>
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
          <Breadcrumb style={{ margin: '10px 10px 20px' }}>
            <Breadcrumb.Item>
              <Link to="/">{selectedMenuItem.charAt(0).toUpperCase() + selectedMenuItem.slice(1)}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Divider type="vertical" style={{ background: '#000', height: '2px', margin: '0 18px' }} />
          <div style={{ padding:'16px'}}>{render}</div>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Nav;
