import React from 'react';
import Order from './Order';
import { v4 } from 'uuid';

function OrderList(props){
  return(
    <div>
      {props.masterOrderList.map((order, index) => (
        <Order
          name={order.name}
          ingredients={order.ingredients}
          key={order.identifier}
          index={index+1}
        />



      ))}
    </div>
  );
}

export default OrderList;