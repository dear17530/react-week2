import { List } from 'antd'

function ListGroup({ data, setData }) {
  const add = id => {
    const newData = data.map(newItem => (newItem.id === id ? { ...newItem, count: newItem.count + 1 } : newItem))
    setData(newData)
  }

  return (
    <>
      <List
        className='ListGroup'
        header='商品列表'
        itemLayout='horizontal'
        split={false}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.description} onClick={() => add(item.id)} />
            <div>$ {item.price}</div>
          </List.Item>
        )}
      />
    </>
  )
}

export default ListGroup
