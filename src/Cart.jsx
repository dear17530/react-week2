import { Button, List, Input, Modal } from 'antd'
import { useEffect, useState } from 'react'
import CartList from './CartList.jsx'

const { TextArea } = Input

function Cart({ data, setData }) {
  const [total, setTotal] = useState(0)
  const [modal, setModal] = useState(false)
  const [remark, setRemark] = useState('')

  useEffect(() => {
    setTotal(data.reduce((acc, cur) => acc + cur.count * cur.price, 0))
  }, [data])

  return (
    <>
      <CartList data={data} setData={setData} type={0} />
      <div className='total_warp'>
        <div className='total'>
          <span>Total</span>
          <span>$ {total}</span>
          <span>
            <Button onClick={() => setModal(true)} type='primary' shape='round' size='small'>
              送出
            </Button>
          </span>
        </div>
        <TextArea onChange={e => setRemark(e.target.value)} rows={5} placeholder={'請輸入備註'} />
      </div>

      <Modal title='訂單' open={modal} onCancel={() => setModal(false)} bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }}>
        <CartList data={data} setData={setData} type={1} total={total} remark={remark} />
      </Modal>
    </>
  )
}

export default Cart
