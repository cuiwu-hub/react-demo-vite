import { CodeSandboxOutlined, QuestionCircleOutlined } from '@ant-design/icons';
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
    getItem('HTML语义化1', 'html/tag', <QuestionCircleOutlined />),
    getItem('HTML5新特性', 'html/newtx', <QuestionCircleOutlined />)
  ]),
  getItem('CSS', 'css', <CodeSandboxOutlined />, [
    getItem('测试', 'css/test', <QuestionCircleOutlined />)
  ]),
  getItem('JS', 'js', <CodeSandboxOutlined />),
  getItem('Vue', 'vue', <CodeSandboxOutlined />),
  getItem('React', 'react', <CodeSandboxOutlined />),
  getItem('Webpack', 'webpack', <CodeSandboxOutlined />),
  getItem('数据结构', 'datajg', <CodeSandboxOutlined />, [
    getItem('绪论', 'datajg/xulun', <QuestionCircleOutlined />),
    getItem('线性表', 'datajg/lineTable', <QuestionCircleOutlined />)
  ]),
  getItem('算法', 'algorithm', <CodeSandboxOutlined />, [
    getItem('链表', 'algorithm/list', <QuestionCircleOutlined />),
    getItem('排序算法', 'algorithm/sort', <QuestionCircleOutlined />),
    getItem('二叉树', 'algorithm/tree', <QuestionCircleOutlined />),
    getItem('动态规划', 'algorithm/dp', <QuestionCircleOutlined />)
  ]),
  getItem('计算机网络', 'computerNet', <CodeSandboxOutlined />),
  getItem('设计模式', 'designModule', <CodeSandboxOutlined />, [
    getItem('单例模式', 'designModule/singleTon', <QuestionCircleOutlined />),
    getItem('观察者模式', 'designModule/observer', <QuestionCircleOutlined />),
    getItem('发布订阅', 'designModule/pubSub', <QuestionCircleOutlined />),
    getItem('策略模式', 'designModule/strategy', <QuestionCircleOutlined />),
  ])
];

const App = (props) => {
  const navigate = useNavigate()
  const [path, setPath] = useState([])
  const [openKeys, setOpenKeys] = useState([])
  useEffect(() => {
    setPath([window.location.pathname.slice(1)])
    setOpenKeys([window.location.pathname.slice(1).split('/')[0]])
  }, [])
  return (
    <Layout
      style={{minHeight: '100vh'}}>
      {/* collapsedk控制菜单栏的展示和收起 */}
      <Sider theme='light' style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
        <h3 className='sider-title'>前端知识总结</h3>
        <Menu
          openKeys={[...openKeys]}
          onOpenChange={(item) => {
            setOpenKeys(item)
          }}
          selectedKeys={[...path]}
          mode="inline" 
          items={items}
          onClick={(item) => {
            navigate(item.key)
            setPath([item.key])
          }}/>
      </Sider>
      <Layout className="site-layout" style={{
        marginLeft: 200,
      }}>
        <Content style={{margin: '10px'}}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
