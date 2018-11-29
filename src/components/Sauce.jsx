import React from 'react';

function Sauce(props) {
  return (
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
      <button onClick={props.addSauceToCurrentPizza} className='btn btn-danger'>Add</button>
    </div>
  );
}

export default Sauce;