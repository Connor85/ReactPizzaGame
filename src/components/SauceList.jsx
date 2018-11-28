import React from 'react';
import Sauce from './Sauce';

function SauceList(props){
  return(
    <div>
    {props.masterSauceList.map((sauce)=> (
      <Sauce
        type={sauce.type}
        points={sauce.points}
      />
    ))}
    </div>
  )
}

export default SauceList;