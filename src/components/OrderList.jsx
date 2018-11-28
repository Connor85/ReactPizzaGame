import React from 'react';
import Order from './Order';
import { v4 } from 'uuid';

function OrderList(props){
  return(
    <div>
      {props.masterOrderList.map((order) => (
        <Order
        name={order.name}
        ingredients={order.ingredients}
        key={order.id}
        />



      ))}
    </div>
  )
}

export default OrderList;