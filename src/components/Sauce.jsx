import React from 'react';

function Sauce(props){
  return(
    <div>
      Sauce: {props.type} for - {props.points} points.
      <button onClick={props.addSauceToCurrentPizza} className='btn btn-danger'>Add {props.type}</button>
    </div>
  )
}

export default Sauce;