import React from 'react';
import Order from './Order';
import { v4 } from 'uuid';

function OrderList(props) {
  return (
    <div>
      <style jsx>{`
          .orderPane {
            height: 880px;
            border: 1px black solid;
            overflow-y: scroll;
            overflow-x: hidden;
            background: lightgray;
          }
        `}</style>
      <div className='orderPane'>
        {props.masterOrderList.map((order, index) => (
          <Order
            name={order.name}
            ingredients={order.ingredients}
            key={order.identifier}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderList;