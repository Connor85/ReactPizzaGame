import React from 'react';
import Toppings from './Toppings';
import { v4 } from 'uuid';

function ToppingsList(props){
  return (
    <div>
    {/* {console.log("toppingslist comp", props)} */}
      {props.masterToppingsList.map((topping, index)=>(
        <Toppings 
          type={topping.type}
          points={topping.points}
          key={index}
          identifier={topping.identifier}
          addToppingsToCurrentPizza={() => props.addToppingsToCurrentPizza(topping.identifier)}
          removeToppingsToCurrentPizza={() => props.removeToppingsToCurrentPizza(topping.identifier)}
        />
      ))}
    </div>
  )
}

export default ToppingsList;