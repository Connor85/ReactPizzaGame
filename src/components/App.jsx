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
            id: 1,
            type: "Regular",
            points: 7
          },
          {
            id: 2,
            type: "Deep Dish",
            points: 8
          },
          {
            id: 3,
            type: "Thin",
            points: 6
          },
        ],
        masterSauceList: [
          {
            id: 10,
            type: "Red",
            points: 1
          },
          {
            id: 11,
            type: "White",
            points: 2
          },
          {
            id: 12,
            type: "Garlic/Oil",
            points: 2
          },
          {
            id: 13,
            type: "BBQ",
            points: 3
          }
        ],
        masterToppingsList: [
          {
            id: 21,
            type: "Pepperoni",
            points: 2
          },
          {
            id: 22,
            type: "Sausage",
            points: 2
          },
          {
            id: 23,
            type: "Canadian Bacon",
            points: 2
          },
          {
            id: 24,
            type: "Olives",
            points: 3
          },
          {
            id: 25,
            type: "Pineapple",
            points: 3
          },
          {
            id: 26,
            type: "Red Onions",
            points: 3
          },
          {
            id: 27,
            type: "Mushrooms",
            points: 3
          },
          {
            id: 28,
            type: "Chicken",
            points: 3
          },
          {
            id: 29,
            type: "Bacon",
            points: 3
          },
        ],
      },
      masterOrderList: [
        {
          name: "Deep Dish Pepperoni with red sauce",
          ingredients: [2, 10, 21]
        }
      ]
    }
    this.waitOrderNewPizza = this.waitOrderNewPizza.bind(this);
  }

  componentDidMount() {
    this.pizzaTimer = setInterval(() => this.waitOrderNewPizza(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.pizzaTimer);
  }

  waitOrderNewPizza() {
    console.log("newpizza ordered!")
    // let orderListCopy = this.state.masterOrderList.slice();
    // orderListCopy.push({name: "new pizza",ingredients: [1,10,21]});
    // this.setState({ masterOrderList: orderListCopy});
  }

  render() {
    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Header />

        <PizzaTable masterIngredientList={this.state.masterIngredientList}/>
        <OrderList masterOrderList={this.state.masterOrderList}/>
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
