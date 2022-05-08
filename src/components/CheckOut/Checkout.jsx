import React from 'react'
import {Shipping_address} from './Shipping_address'
import { Payment } from './Payment'
import { OrderRecipt } from './OrderRecipt'
const Checkout = ({value}) => {
  console.log("chek",value)
  return (
    <div style={{display : "flex"}}>
      <div>
        <Shipping_address/>
        <Payment/>

      </div>
      <div>
          <OrderRecipt/>
      </div>

        
    </div>
  )
}

export { Checkout }