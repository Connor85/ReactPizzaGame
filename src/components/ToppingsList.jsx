import React from 'react';
import Toppings from './Toppings';
import { v4 } from 'uuid';

function ToppingsList(props) {
  return (
    <div>
      <style jsx>{`
          .topList {
            border: solid black 1px;
            padding: 15px;
            margin: 5px;
          }
          .topHeader {
            text-align: center;
            text-decoration: underline;
          }
        `}</style>

      <div className='topList'>
        {/* {console.log("toppingslist comp", props)} */}
        <h2 className='topHeader'>Toppings</h2>
        {props.masterToppingsList.map((topping, index) => (
          <div className='row'>
            <Toppings
              type={topping.type}
              points={topping.points}
              key={index}
              identifier={topping.identifier}
              addToppingsToCurrentPizza={() => props.addToppingsToCurrentPizza(topping.identifier)}
              removeToppingsToCurrentPizza={() => props.removeToppingsToCurrentPizza(topping.identifier)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToppingsList;