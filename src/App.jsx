import React, { useState } from 'react'
import { Layout, Space } from 'antd'
import ListGroup from './ListGroup.jsx'
import HeaderComponent from './Header.jsx'
import Cart from './Cart.jsx'
const { Header, Sider, Content } = Layout

const headerStyle = {
  textAlign: 'center',
  height: '10vh',
  paddingInline: 0,
  // backgroundColor: '#F1C1BD'
  backgroundColor: '#FCF7F1'
}

const contentStyle = {
  height: '100vh',
  padding: '10px 20px',
  backgroundColor: '#FCF7F1'
}
const siderStyle = {
  height: '100vh',
  padding: '10px 20px',
  backgroundColor: '#FCF7F1'
}

function App() {
  const init = [
    {
      id: 1,
      name: '珍珠奶茶',
      description: '香濃奶茶搭配QQ珍珠',
      price: 50,
      count: 0
    },
    {
      id: 2,
      name: '冬瓜檸檬',
      description: '清新冬瓜配上新鮮檸檬',
      price: 45,
      count: 0
    },
    {
      id: 3,
      name: '翡翠檸檬',
      description: '綠茶與檸檬的完美結合',
      price: 55,
      count: 0
    },
    {
      id: 4,
      name: '四季春茶',
      description: '香醇四季春茶，回甘無比',
      price: 45,
      count: 0
    },
    {
      id: 5,
      name: '阿薩姆奶茶',
      description: '阿薩姆紅茶搭配香醇鮮奶',
      price: 50,
      count: 0
    },
    {
      id: 6,
      name: '檸檬冰茶',
      description: '檸檬與冰茶的清新組合',
      price: 45,
      count: 0
    },
    {
      id: 7,
      name: '芒果綠茶',
      description: '芒果與綠茶的獨特風味',
      price: 55,
      count: 0
    },
    {
      id: 8,
      name: '抹茶拿鐵',
      description: '抹茶與鮮奶的絕配',
      price: 60,
      count: 0
    }
  ]

  const [data, setData] = useState(init)

  return (
    <Space
      direction='vertical'
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <Layout>
        {/* <Header style={headerStyle}><HeaderComponent /></Header> */}
        <Layout hasSider>
          <Sider width={'50%'} style={siderStyle}>
            <ListGroup data={data} setData={setData} />
          </Sider>
          <Content style={contentStyle}>
            <Cart data={data} setData={setData} />
          </Content>
        </Layout>
      </Layout>
    </Space>
  )
}

export default App
