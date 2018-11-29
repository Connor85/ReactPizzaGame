import React from 'react';
import Toppings from './Toppings';
import { v4 } from 'uuid';

function ToppingsList(props) {
  return (
    <div>
      <style jsx>{`
          .topList {

            padding-bottom: 25px;
          }
          .topHeader {
            text-align: center;
            text-decoration: underline;
            border: 1px black solid;
            background: lightyellow;
            height: 45px;
          }
        `}</style>

      <div className='topList'>
        {/* {console.log("toppingslist comp", props)} */}
        <h2 className='topHeader'>Toppings</h2>
        {props.masterToppingsList.map((topping) => (
          <div >
            <Toppings
              type={topping.type}
              points={topping.points}
              key={topping.identifier}
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