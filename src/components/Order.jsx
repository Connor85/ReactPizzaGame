import React from 'react';

function Order(props) {
  return (
    <div>
      <style jsx>{`
          .order {
            border: 1px black solid;
            margin:5px;
            padding:10px;
          }
          .orderNumber {
            border: 1px black solid;
            font-size: 60px;
            text-align: center;
          }
        `}</style>
      <div className='order'>
        <div className='row'>
          <div className='col-3'>
            <h4 className='orderNumber'>#{props.index}</h4>
          </div>
          <div className='col-9'>
            <h4>
              {props.name}<br></br>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;