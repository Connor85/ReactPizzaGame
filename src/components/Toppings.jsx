import React from 'react';

function Toppings(props) {

  return (
    <div className='toppingsType'>
      <style jsx>{`
      .toppingsType {
        margin-bottom: 20px;
      }
      button {
        margin-left:  50px;
        float: right;
      }
    `}</style>
        {props.type}
        <button onClick={props.addToppingsToCurrentPizza} className="btn btn-warning addBtn">Add</button>
    </div>
  );
}

export default Toppings;