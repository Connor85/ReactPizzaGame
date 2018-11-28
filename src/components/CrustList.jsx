import React from 'react';
import Crust from './Crust';
import { v4 } from 'uuid';

function CrustList(props){
  return(
    <div>
      {props.masterCrustList.map((crust) => (
        <Crust
          type={crust.type}
          points={crust.points}
          key={crust.id}
        />
      ))}
    </div>
  )
}

export default CrustList;