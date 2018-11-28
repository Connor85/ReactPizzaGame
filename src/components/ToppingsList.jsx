import React from 'react';
import Toppings from './Toppings';

function ToppingsList(props){
  return (
    <div>
      {props.masterToppingsList.map((topping)=>(
        <Toppings 
          type={topping.type}
          points={topping.points}
        />
      ))}
    </div>
  )
}

export default ToppingsList;