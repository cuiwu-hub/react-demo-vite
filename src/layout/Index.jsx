import { CodeSandboxOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
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
  getItem('HTML', 'html', <CodeSandboxOutlined />, [
    getItem('标签详解', 'html/tag', <CodeSandboxOutlined />)
  ]),
  getItem('CSS', 'css', <CodeSandboxOutlined />),
  getItem('JS', 'js', <CodeSandboxOutlined />),
  getItem('Vue', 'vue', <CodeSandboxOutlined />),
  getItem('React', 'react', <CodeSandboxOutlined />),
  getItem('Webpack', 'webpack', <CodeSandboxOutlined />),
  getItem('数据结构', 'datajg', <CodeSandboxOutlined />),
  getItem('计算机网络', 'computerNet', <CodeSandboxOutlined />),
  getItem('算法', 'algorithm', <CodeSandboxOutlined />)
];

const App = (props) => {
  const navigate = useNavigate()
  const [path, setPath] = useState([])
  useEffect(() => {
    setPath([window.location.pathname.slice(1)])
  }, [])
  return (
    <Layout
      style={{minHeight: '100vh'}}>
      {/* collapsedk控制菜单栏的展示和收起 */}
      <Sider theme='light'>
        <h3 className='sider-title'>前端知识大纲</h3>
        <Menu
          // openKeys={[...path]}
          selectedKeys={[...path]}
          mode="inline" 
          items={items}
          onClick={(item) => {
            navigate(item.key)
            setPath([item.key])
          }}/>
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
