import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PizzaTable from './PizzaTable';
import Order from './Order';
import Score from './Score';

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
            type: "Regular",
            points: 7
          },
          {
            type: "Deep Dish",
            points: 8
          },
          {
            type: "Thin",
            points: 6
          },
        ],
        masterSauceList: [
          {
            type: "Red",
            points: 1
          },
          {
            type: "White",
            points: 2
          },
          {
            type: "Garlic/Oil",
            points: 2
          },
          {
            type: "BBQ",
            points: 3
          }
        ],
        masterToppingsList: [
          {
            type: "Pepperoni",
            points: 2
          },
          {
            type: "Sausage",
            points: 2
          },
          {
            type: "Canadian Bacon",
            points: 2
          },
          {
            type: "Olives",
            points: 3
          },
          {
            type: "Pineapple",
            points: 3
          },
          {
            type: "Red Onions",
            points: 3
          },
          {
            type: "Mushrooms",
            points: 3
          },
          {
            type: "Chicken",
            points: 3
          },
          {
            type: "Bacon",
            points: 3
          },
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Header />

        <PizzaTable masterIngredientList={this.state.masterIngredientList}/>
        <Order />
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
