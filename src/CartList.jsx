import { List, Input } from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'

function CartList({ data, setData, type, total, remark }) {
  const changeCount = (id, count) => {
    const newData = data.map(newItem => (newItem.id === id ? { ...newItem, count: count === 'plus' ? newItem.count + 1 : count === 'minus' ? newItem.count - 1 : count } : newItem))
    setData(newData)
  }

  return (
    <>
      <List
        header={type == 0 ? '購物車' : ''}
        itemLayout='horizontal'
        split={false}
        dataSource={data}
        renderItem={(item, index) =>
          item.count !== 0 ? (
            <>
              <List.Item>
                <List.Item.Meta title={item.name} description={type == 0 ? item.description : ''} />
                <div className='price'>
                  {type == 0 ? (
                    <div className='input_count'>
                      <MinusCircleOutlined style={{ color: '#F2C1BE' }} onClick={() => changeCount(item.id, 'minus')} />
                      <Input type='number' onChange={event => changeCount(item.id, event.target.value)} style={{ width: '100px', textAlign: 'center' }} value={item.count} />
                      <PlusCircleOutlined style={{ color: '#F2C1BE' }} onClick={() => changeCount(item.id, 'plus')} />
                    </div>
                  ) : (
                    item.count + '杯'
                  )}

                  <div>$ {item.price * item.count}</div>
                </div>
              </List.Item>
            </>
          ) : (
            false
          )
        }
      />

      {type == 0 ? '' : <p className='modal_total'>Total {total}</p>}
      {type == 0 || remark.length == 0 ? '' : <p className='modal_remark'>備註: {remark}</p>}
    </>
  )
}

export default CartList
