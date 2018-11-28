import React from 'react';
import CrustList from './CrustList';
import SauceList from './SauceList';
import ToppingsList from './ToppingsList';
import CurrentPizza from './CurrentPizza';

function PizzaTable(props) {
  return (
    <div>
      <CrustList masterCrustList={props.masterIngredientList.masterCrustList} />
      <hr />
      <SauceList masterSauceList={props.masterIngredientList.masterSauceList} />
      <hr />
      <ToppingsList masterToppingsList={props.masterIngredientList.masterToppingsList} />
      <hr />
      {/* {console.log(props)} */}
      <CurrentPizza
        getCrustName={props.getCrustName}
        getSaucetName={props.getSaucetName}
        getToppingtName={props.getToppingtName}
        currentPizza={props.currentPizza}
      />
    </div>
  )
}

export default PizzaTable;