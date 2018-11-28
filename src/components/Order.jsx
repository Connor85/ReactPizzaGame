import React from 'react';

function Order(props){
  return(
    <div>
      Order: {props.name}<br></br>
      Requires: {props.ingredients}
    </div>
  )
}

export default Order;