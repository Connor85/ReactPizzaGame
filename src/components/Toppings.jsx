import React from 'react';

function Toppings(props) {

  return (
    <div>
      <style jsx>{`
          h5.toppingsType {
            text-align: center;
          }
          .addBtn {
            float:right;
          }

        `}</style>
      {/* <div className='col-8'> */}
        <h5 className='toppingsType'>{props.type} </h5>
      {/* </div> */}
      {/* <div className='col-3'> */}
        <button onClick={props.addToppingsToCurrentPizza} className="btn btn-warning addBtn">Add</button>
      {/* </div> */}
    </div>
  );
}

export default Toppings;