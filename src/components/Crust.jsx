import React from 'react';

function Crust(props){
  return(
    <div>
      Type: {props.type} for - {props.points} points.
      <button className='btn btn-info'>Add {props.type}</button>
      <br></br>
    </div>
  )
}

export default Crust;