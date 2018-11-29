import React from 'react';

function Crust(props){
  return(
    <div className="crust-type">
    <style jsx>{`
      .crust-type {
        margin-bottom: 20px;
      }
      button {
        margin-left:  20px;
        float: right;
      }
    `}</style>
      {props.type}
      <button onClick={props.addCrustToCurrentPizza} className='btn btn-info'>Add</button>
      <br></br>
    </div>
  );
}

export default Crust;