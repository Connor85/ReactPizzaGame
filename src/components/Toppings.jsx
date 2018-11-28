import React from 'react';

function Toppings (props){
  return(
    <div>
      Type: {props.type} for - {props.points} points.
      <button className="btn btn-warning">add {props.type}</button>
    </div>
  )
}

export default Toppings;