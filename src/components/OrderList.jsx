import React from 'react';
import Order from './Order';

function OrderList(props){
  return(
    <div>
      {props.masterOrderList.map((order) => (
        <Order
        name={order.name}
        ingredients={order.ingredients}
        />



      ))}
    </div>
  )
}

export default OrderList;