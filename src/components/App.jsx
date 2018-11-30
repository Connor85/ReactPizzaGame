import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PizzaTable from './PizzaTable';
import OrderList from './OrderList';
import Score from './Score';
import Moment from 'moment';
import CurrentPizza from './CurrentPizza';
import StatusPane from './StatusPane';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusString: "Orders Coming in...",
      totalScore: 0,
      masterIngredientList: {
        masterCrustList: [
          {
            identifier: 0,
            type: 'Deep Dish',
            points: 8
          },
          {
            identifier: 1,
            type: 'Regular',
            points: 7
          },
          {
            identifier: 2,
            type: 'Thin',
            points: 6
          },
        ],
        masterSauceList: [
          {
            identifier: 0,
            type: 'BBQ Sauce',
            points: 3
          },
          {
            identifier: 1,
            type: 'Garlic/Oil',
            points: 2
          },
          {
            identifier: 2,
            type: 'Red Sauce',
            points: 1
          },
          {
            identifier: 3,
            type: 'White Sauce',
            points: 2
          }
        ],
        masterToppingsList: [
          {
            identifier: 0,
            type: 'Bacon',
            points: 3
          },
          {
            identifier: 1,
            type: 'Candian Ham',
            points: 2
          },
          {
            identifier: 2,
            type: 'Chicken',
            points: 3
          },
          {
            identifier: 3,
            type: 'Mushrooms',
            points: 3
          },
          {
            identifier: 4,
            type: 'Olives',
            points: 3
          },
          {
            identifier: 5,
            type: 'Pepperoni',
            points: 2
          },
          {
            identifier: 6,
            type: 'Pineapple',
            points: 3
          },
          {
            identifier: 7,
            type: 'Sausage',
            points: 2
          },
          {
            identifier: 8,
            type: 'Red Onions',
            points: 3
          },
        ],
      },
      masterOrderList: [],
      currentPizza: [
        {
          crust: [0],
          sauce: [0],
          toppings: [],
        }
      ]
    };
    this.waitOrderNewPizza = this.waitOrderNewPizza.bind(this);
    this.getCrustName = this.getCrustName.bind(this);
    this.getSauceName = this.getSauceName.bind(this);
    this.getToppingName = this.getToppingName.bind(this);
    this.addToppingsToCurrentPizza = this.addToppingsToCurrentPizza.bind(this);
    this.removeToppingsToCurrentPizza = this.removeToppingsToCurrentPizza.bind(this);
    this.addCrustToCurrentPizza = this.addCrustToCurrentPizza.bind(this);
    this.addSauceToCurrentPizza = this.addSauceToCurrentPizza.bind(this);
    this.handleMatchPizza = this.handleMatchPizza.bind(this);
  }

  getCrustName(index) {
    let nameIndex = this.state.masterIngredientList.masterCrustList.map(pizza => pizza.identifier).indexOf(index);
    return this.state.masterIngredientList.masterCrustList[nameIndex].type;
  }

  getSauceName(index) {
    let nameIndex = this.state.masterIngredientList.masterSauceList.map(pizza => pizza.identifier).indexOf(index);
    return this.state.masterIngredientList.masterSauceList[nameIndex].type;

  }
  getToppingName(index) {
    let nameIndex = this.state.masterIngredientList.masterToppingsList.map(pizza => pizza.identifier).indexOf(index);
    return this.state.masterIngredientList.masterToppingsList[nameIndex].type;
  }

  componentDidMount() {
    this.pizzaTimer = setInterval(() => this.waitOrderNewPizza(), Math.random() * 7500 + 4500);
  }

  componentWillUnmount() {
    clearInterval(this.pizzaTimer);
  }

  waitOrderNewPizza() {
    let orderListCopy = this.state.masterOrderList.slice();
    const newPizza = this.generateNewPizza();
    orderListCopy.push(newPizza);
    this.setState({ masterOrderList: orderListCopy });
  }

  addToppingsToCurrentPizza(index) {
    let newCurrentPizza = this.state.currentPizza.slice();
    // if (newCurrentPizza[0].toppings.includes(index)) {
    // } else {
    newCurrentPizza[0].toppings.push(index);
    this.setState({ currentPizza: newCurrentPizza });
    // }
  }

  removeToppingsToCurrentPizza(index) {
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
    let randomToppingQuantity = Math.ceil((Math.random() * 2) + 2)
    let newToppings = [];
    let newToppingsName = '';
    let toppingLength = this.state.masterIngredientList.masterToppingsList.length;
    for (let i = 0; i < randomToppingQuantity; i++) {
      let newToppingIndex = Math.floor((Math.random() * toppingLength));
      newToppings.push(newToppingIndex);
      newToppingsName += this.state.masterIngredientList.masterToppingsList[newToppingIndex].type + ", ";
    }
    let nameString = this.state.masterIngredientList.masterCrustList[newCrustIndex].type + " Pizza with " + this.state.masterIngredientList.masterSauceList[newSauceIndex].type + " with " + newToppingsName;
    return {
      name: nameString,
      crust: [newCrustIndex],
      sauce: [newSauceIndex],
      toppings: newToppings
    }
  }

  handleMatchPizza() {
    let currentPizzaCopy = this.state.currentPizza.slice();
    let masterOrderListCopy = this.state.masterOrderList.slice();
    currentPizzaCopy[0].toppings.sort((a, b) => (a - b));
    for (let i = 0; i < this.state.masterOrderList.length - 1; i++) {
      masterOrderListCopy[i].toppings.sort((a, b) => (a - b));
      let newPoints = 0;
      if (currentPizzaCopy[0].crust.join('') === masterOrderListCopy[i].crust.join('') && currentPizzaCopy[0].sauce.join('') === masterOrderListCopy[i].sauce.join('') && currentPizzaCopy[0].toppings.join('') === masterOrderListCopy[i].toppings.join('')) {
        newPoints += 1 + masterOrderListCopy[i].toppings.length;
        this.setState({ statusString: "You filled order #" + i + " and get +" + newPoints + " points!" });
        const scoreToUpdate = this.state.totalScore + newPoints;
        this.setState({ totalScore: scoreToUpdate })
        currentPizzaCopy[0] = {
          crust: [0],
          sauce: [0],
          toppings: [],
        };
        masterOrderListCopy.splice(i, 1);
        this.setState({ masterOrderList: masterOrderListCopy })
        this.setState({ currentPizza: [currentPizzaCopy[0]] });
        return true;
      }
    }
    this.setState({ statusString: "Pizza does not match any order." });
    return false;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className='row container d-flex'>
          <div className="col-3">
            <PizzaTable
              addCrustToCurrentPizza={this.addCrustToCurrentPizza}
              addSauceToCurrentPizza={this.addSauceToCurrentPizza}
              masterIngredientList={this.state.masterIngredientList}
              getCrustName={this.getCrustName}
              getSauceName={this.getSauceName}
              getToppingName={this.getToppingName}
              currentPizza={this.state.currentPizza}
              addToppingsToCurrentPizza={this.addToppingsToCurrentPizza}
              removeToppingsToCurrentPizza={this.removeToppingsToCurrentPizza}
              handleMatchPizza={this.handleMatchPizza}
            />
          </div>
          <div className='col-4'>
            <StatusPane statusString={this.state.statusString} />
            <CurrentPizza
              getCrustName={this.getCrustName}
              getSauceName={this.getSauceName}
              getToppingName={this.getToppingName}
              currentPizza={this.state.currentPizza}
              removeToppingsToCurrentPizza={this.removeToppingsToCurrentPizza}
              handleMatchPizza={this.handleMatchPizza}
            />
          </div>
          <div className='col-5'>
            <Score totalScore={this.state.totalScore} />
            <OrderList masterOrderList={this.state.masterOrderList} />
          </div>
          {/* <Switch>
          <Route exact path='/' component={} />
        </Switch> */}
        </div>
      </div>
    );

  }
}

//App.propTypes = {
//};

export default App;
