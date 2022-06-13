import { CodeSandboxOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import './index.css'
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('HTML', '1', <CodeSandboxOutlined />),
  getItem('CSS', '2', <CodeSandboxOutlined />),
  getItem('JS', 'sub1', <CodeSandboxOutlined />),
  getItem('Vue', 'sub2', <CodeSandboxOutlined />),
  getItem('React', '3', <CodeSandboxOutlined />),
  getItem('Webpack', '4', <CodeSandboxOutlined />),
  getItem('数据结构', '5', <CodeSandboxOutlined />),
  getItem('计算机网络', '6', <CodeSandboxOutlined />),
  getItem('算法', '7', <CodeSandboxOutlined />)
];

const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{minHeight: '100vh'}}>
      {/* collapsedk控制菜单栏的展示和收起 */}
      <Sider theme='light' collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <h3 className='sider-title'>前端知识大纲</h3>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items}/>
      </Sider>
      <Layout className="site-layout">
        <Content style={{margin: '10px'}}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
