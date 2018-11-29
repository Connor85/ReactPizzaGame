import React from 'react';

function Toppings (props){
  
  return(
    <div>
      Type: {props.type} for - {props.points} points.
      id: {props.identifier}
      <button onClick={props.addToppingsToCurrentPizza} className="btn btn-warning">Add {props.type}</button>
      {/* <button onClick={props.removeToppingsToCurrentPizza} className="btn btn-primary">Remove {props.type}</button> */}
    </div>
  )
}

export default Toppings;