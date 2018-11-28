import React from 'react';
import Toppings from './Toppings';
import { v4 } from 'uuid';

function ToppingsList(props){
  return (
    <div>
      {props.masterToppingsList.map((topping)=>(
        <Toppings 
          type={topping.type}
          points={topping.points}
          key={topping.id}
        />
      ))}
    </div>
  )
}

export default ToppingsList;