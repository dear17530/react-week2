import { Col, Row } from 'antd'
import { ShoppingFilled, UserOutlined } from '@ant-design/icons'
function HeaderComponent() {
  return (
    <Row>
      <Col span={24}>free shipping on orders over $200</Col>
      <Col span={8}>col-12</Col>
      <Col span={8}>col-12</Col>
      <Col span={8}>
        <UserOutlined style={{ fontSize: '20px' }} fill={'black'} />
        <ShoppingFilled style={{ fontSize: '20px' }} />
      </Col>
    </Row>
  )
}

export default HeaderComponent
