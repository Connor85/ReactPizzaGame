import React from 'react';
import Crust from './Crust';

function CrustList(props){
  return(
    <div>
      {props.masterCrustList.map((crust) => (
        <Crust
          type={crust.type}
          points={crust.points}
        />
      ))}
    </div>
  )
}

export default CrustList;