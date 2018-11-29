import React from 'react';
import Sauce from './Sauce';
import { v4 } from 'uuid';

function SauceList(props){
  return(
    <div>
    {props.masterSauceList.map((sauce)=> (
      <Sauce
        type={sauce.type}
        points={sauce.points}
        key={sauce.id}
        addSauceToCurrentPizza={()=> props.addSauceToCurrentPizza(sauce.identifier)}
      />
    ))}
    </div>
  )
}

export default SauceList;