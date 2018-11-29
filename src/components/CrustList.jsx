import React from 'react';
import Crust from './Crust';
import { v4 } from 'uuid';

function CrustList(props) {
  return (
    <div>
      <style jsx>{` 
        .topHeader {
        text-align: center;
        text-decoration: underline;
        border: 1px black solid;
        background: lightyellow;
        height: 45px;
          }

      `}</style>
      <h2 className="topHeader">CrustList</h2>
      {props.masterCrustList.map((crust) => (
        <Crust
          type={crust.type}
          points={crust.points}
          key={crust.identifier}
          addCrustToCurrentPizza={() => props.addCrustToCurrentPizza(crust.identifier)}
        />

      ))}
    </div>
  );
}

export default CrustList;