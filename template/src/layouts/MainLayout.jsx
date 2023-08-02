import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
}));
items.unshift(<div className="demo-logo-vertical" />);

export default function MainLayout() {
  return (
    <Layout hasSider>
      <Sider
        width={100}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          padding: 10,
          background: 'transparent',
        }}>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: '100%', borderRadius: '8px' }}
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Content className="pl-[100px]">
        <Outlet />
      </Content>
    </Layout>
  );
}
