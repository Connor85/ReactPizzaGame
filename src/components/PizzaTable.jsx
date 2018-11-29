import React from 'react';
import CrustList from './CrustList';
import SauceList from './SauceList';
import ToppingsList from './ToppingsList';
import CurrentPizza from './CurrentPizza';

function PizzaTable(props) {
  return (
    <div>
      <style jsx>{` 
          .elements {
            border: 1px black solid;
            padding: 10px;
            background-color: white;
          }
      `}</style>
      {/* <CurrentPizza
        getCrustName={props.getCrustName}
        getSauceName={props.getSauceName}
        getToppingName={props.getToppingName}
        currentPizza={props.currentPizza}
        removeToppingsToCurrentPizza={props.removeToppingsToCurrentPizza}  
        handleMatchPizza={props.handleMatchPizza}       
      /> */}
      <div className='elements'>
        <CrustList
          masterCrustList={props.masterIngredientList.masterCrustList}
          addCrustToCurrentPizza={props.addCrustToCurrentPizza}
        />
        <hr />
        <SauceList
          masterSauceList={props.masterIngredientList.masterSauceList}
          addSauceToCurrentPizza={props.addSauceToCurrentPizza}
        />
        <hr />
        <ToppingsList
          masterToppingsList={props.masterIngredientList.masterToppingsList}
          addToppingsToCurrentPizza={props.addToppingsToCurrentPizza}
          removeToppingsToCurrentPizza={props.removeToppingsToCurrentPizza}
        />
      </div>
    </div>
  );
}

export default PizzaTable;