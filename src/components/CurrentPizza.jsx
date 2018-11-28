import React from 'react';

function CurrentPizza(props) {
  return (
    <div>
      Current Pizza:

      Crusts:
      {/* {console.log(props.currentPizza[0].crust)} */}
      <h6>{props.currentPizza[0].crust.map((crust, index) => (

        <div className="return" key={index}>
          {props.getCrustName(crust)}
          <br></br>
        </div>
      ))}</h6>
      Sauces:
     <h6>{props.currentPizza[0].sauce.map((sauce) => (
        <div>
          {props.getSaucetName(sauce)}
         </div>
      ))}</h6>
      Toppings:
      <h6>{props.currentPizza[0].toppings.map((toppings) => (
        <div>
          {props.getToppingtName(toppings)}
          <br></br>
        </div>
        ))}</h6>
    </div>
  );
}

export default CurrentPizza;