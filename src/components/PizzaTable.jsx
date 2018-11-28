import React from 'react';
import CrustList from './CrustList';
import SauceList from './SauceList';
import ToppingsList from './ToppingsList';

function PizzaTable(props){
  return (
    <div>
      <CrustList masterCrustList={props.masterIngredientList.masterCrustList}/>
      <hr/>
      <SauceList masterSauceList={props.masterIngredientList.masterSauceList}/>
      <hr/>
      <ToppingsList masterToppingsList={props.masterIngredientList.masterToppingsList}/>
    </div>
  )
}

export default PizzaTable;