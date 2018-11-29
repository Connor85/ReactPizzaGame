import React from 'react';
import Sauce from './Sauce';
import { v4 } from 'uuid';

function SauceList(props){
  return(
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
      <h2 className="topHeader">Sauces</h2>
      {props.masterSauceList.map((sauce)=> (
        <Sauce
          type={sauce.type}
          points={sauce.points}
          key={sauce.identifier}
          addSauceToCurrentPizza={()=> props.addSauceToCurrentPizza(sauce.identifier)}
        />
      ))}
    </div>
  );
}

export default SauceList;