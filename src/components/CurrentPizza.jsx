import React from 'react';

function CurrentPizza(props) {

  function onDeleteToppings(id) {
    console.log('remove', id);
    props.removeToppingsToCurrentPizza(id);
  }
  return (
    <div>
      Current Pizza:

      Crusts:
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
          {/* {console.log(props)} */}
          {props.getToppingtName(toppings)}
          <span onClick={() => props.removeToppingsToCurrentPizza(toppings)} className="deleteLink"> - Remove </span>
          <br></br>
        </div>
      ))}</h6>
    </div>
  );
}

export default CurrentPizza;