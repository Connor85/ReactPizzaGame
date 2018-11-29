import React from 'react';

function CurrentPizza(props) {
  return (
    <div>
      <style jsx>{`
          .tableGlobal {
            border: 1px black solid;
            padding:10px;
            text-align: center;
            background-color: white;
          }
          .toppings {
            font-size: 30px;
          }
          .deleteLink {
            color: red;
            font-size: 24px;
          }
          .currentHeader {
            border: 1px black solid;
            background: lightyellow;
            height: 40px;
          }
          .topHeaders {
            text-decoration: underline;
            font-size: 50px;
            font-weight: bold;
          }
        `}</style>
      <div className='tableGlobal'>
        <h3 className='currentHeader'>Current Pizza:</h3>
        <span onClick={props.handleMatchPizza} className="btn btn-success">Check Order</span>

        <h4 className='topHeaders'>Crust:</h4>
        <h6>{props.currentPizza[0].crust.map((crust, index) => (
          <div key={index}>
            <h5 className='toppings'>{props.getCrustName(crust)}</h5>
          </div>
        ))}</h6>
        <h4 className='topHeaders'>Sauce:</h4>
        <h6>{props.currentPizza[0].sauce.map((sauce) => (
          <div>
            <h5 className='toppings'>{props.getSauceName(sauce)}</h5>
          </div>
        ))}</h6>
        <h4 className='topHeaders'>Toppings:</h4>
        <h6>{props.currentPizza[0].toppings.map((toppings) => (
          <div>
            {/* {console.log(props)} */}
            <h5 className='toppings'>{props.getToppingName(toppings)} -
              <span onClick={() => props.removeToppingsToCurrentPizza(toppings)} className="deleteLink"> Remove </span>
            </h5>
          </div>
        ))}</h6>

      </div>
    </div>
  );
}

export default CurrentPizza;