import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PizzaTable from './PizzaTable';
import OrderList from './OrderList';
import Score from './Score';
import Moment from 'moment';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterIngredientList: {
        masterCrustList: [
          {
            identifier: 1,
            type: 'Regular',
            points: 7
          },
          {
            identifier: 2,
            type: 'Deep Dish',
            points: 8
          },
          {
            identifier: 3,
            type: 'Thin',
            points: 6
          },
        ],
        masterSauceList: [
          {
            identifier: 10,
            type: 'Red',
            points: 1
          },
          {
            identifier: 11,
            type: 'White',
            points: 2
          },
          {
            identifier: 12,
            type: 'Garlic/Oil',
            points: 2
          },
          {
            identifier: 13,
            type: 'BBQ',
            points: 3
          }
        ],
        masterToppingsList: [
          {
            identifier: 21,
            type: 'Pepperoni',
            points: 2
          },
          {
            identifier: 22,
            type: 'Sausage',
            points: 2
          },
          {
            identifier: 23,
            type: 'Canadian Bacon',
            points: 2
          },
          {
            identifier: 24,
            type: 'Olives',
            points: 3
          },
          {
            identifier: 25,
            type: 'Pineapple',
            points: 3
          },
          {
            identifier: 26,
            type: 'Red Onions',
            points: 3
          },
          {
            identifier: 27,
            type: 'Mushrooms',
            points: 3
          },
          {
            identifier: 28,
            type: 'Chicken',
            points: 3
          },
          {
            identifier: 29,
            type: 'Bacon',
            points: 3
          },
        ],
      },
      masterOrderList: [
        {
          name: 'Deep Dish Pepperoni with red sauce',
          crust: [2],
          sauce: [10],
          toppings: [21, 23],
        }
      ],
      currentPizza: [
        {
          crust: [1],
          sauce: [12],
          toppings: [23, 25],
        }
      ]
    };
    this.waitOrderNewPizza = this.waitOrderNewPizza.bind(this);
    this.getCrustName = this.getCrustName.bind(this);
    this.getSaucetName = this.getSaucetName.bind(this);
    this.getToppingtName = this.getToppingtName.bind(this);
    this.addToppingsToCurrentPizza = this.addToppingsToCurrentPizza.bind(this);
    this.removeToppingsToCurrentPizza = this.removeToppingsToCurrentPizza.bind(this);
    this.addCrustToCurrentPizza = this.addCrustToCurrentPizza.bind(this);
    this.addSauceToCurrentPizza = this.addSauceToCurrentPizza.bind(this);
  }

  getCrustName(index) {
    let nameIndex = this.state.masterIngredientList.masterCrustList.map(pizza => pizza.identifier).indexOf(index);
    return this.state.masterIngredientList.masterCrustList[nameIndex].type;
  }

  getSaucetName(index) {
    let nameIndex = this.state.masterIngredientList.masterSauceList.map(pizza => pizza.identifier).indexOf(index);
    return this.state.masterIngredientList.masterSauceList[nameIndex].type;

  }
  getToppingtName(index) {
    let nameIndex = this.state.masterIngredientList.masterToppingsList.map(pizza => pizza.identifier).indexOf(index);
    return this.state.masterIngredientList.masterToppingsList[nameIndex].type;
  }


  componentDidMount() {
    this.pizzaTimer = setInterval(() => this.waitOrderNewPizza(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.pizzaTimer);
  }

  waitOrderNewPizza() {
    let orderListCopy = this.state.masterOrderList.slice();
    const newPizza = this.generateNewPizza();
    orderListCopy.push(newPizza);
    console.log("newpizza", orderListCopy.length, newPizza);
    this.setState({ masterOrderList: orderListCopy });
  }

  addToppingsToCurrentPizza(index) {
    let newCurrentPizza = this.state.currentPizza.slice();
    if (newCurrentPizza[0].toppings.includes(index)) {
    } else {
      newCurrentPizza[0].toppings.push(index);
      this.setState({ currentPizza: newCurrentPizza });
    }
  }

  removeToppingsToCurrentPizza(index) {
    // console.log("removetoppings", index);
    let newCurrentPizza = this.state.currentPizza.slice();
    let location = newCurrentPizza[0].toppings.indexOf(index);
    if (location !== -1) {
      newCurrentPizza[0].toppings.splice(location, 1);
      this.setState({ currentPizza: newCurrentPizza });
    }
  }

  addCrustToCurrentPizza(index) {
    let newCurrentPizza = this.state.currentPizza.slice();
    newCurrentPizza[0].crust[0] = (index);
    this.setState({ currentPizza: newCurrentPizza });
  }

  addSauceToCurrentPizza(index) {
    let newCurrentPizza = this.state.currentPizza.slice();
    newCurrentPizza[0].sauce[0] = index;
    this.setState({ currentPizza: newCurrentPizza });
  }

  generateNewPizza() {
    let newCrustIndex = Math.floor((Math.random() * this.state.masterIngredientList.masterCrustList.length));
    let newSauceIndex = Math.floor((Math.random() * this.state.masterIngredientList.masterSauceList.length));
    let randomToppingQuantity = Math.ceil((Math.random() * 3))
    let newToppings = [];
    console.log(newCrustIndex, newSauceIndex,randomToppingQuantity);
    for (let i = 0; i < randomToppingQuantity; i++) {
      let newToppingIndex = Math.floor((Math.random() * this.state.masterIngredientList.masterToppingList.length));
      newToppings.push(newTopping[newToppingIndex]);
    }
    return {
      name: 'Deep Dish Pepperoni with red sauce',
      crust: [newCrustIndex],
      sauce: [newSauceIndex],
      toppings: newToppings,
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Header />

        <PizzaTable
          addCrustToCurrentPizza={this.addCrustToCurrentPizza}
          addSauceToCurrentPizza={this.addSauceToCurrentPizza}
          masterIngredientList={this.state.masterIngredientList}
          getCrustName={this.getCrustName}
          getSaucetName={this.getSaucetName}
          getToppingtName={this.getToppingtName}
          currentPizza={this.state.currentPizza}
          addToppingsToCurrentPizza={this.addToppingsToCurrentPizza}
          removeToppingsToCurrentPizza={this.removeToppingsToCurrentPizza}
        />
        <OrderList masterOrderList={this.state.masterOrderList} />
        <Score />
        {/* <Switch>
          <Route exact path='/' component={} />
        </Switch> */}
      </div>
    );

  }
}

//App.propTypes = {
//};

export default App;
