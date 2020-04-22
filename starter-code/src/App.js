import React, { Component } from 'react';
import './App.css';
import { FoodBox } from './FoodBox';
import foods from './foods.json';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foodList: foods,
    searchBar: '',
    todayFood: [],
    quantity: 0,
    totalCalories: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFood = (e) => {
    let totalC = e.quantity * e.calories;
    this.setState({ totalCalories: this.state.totalCalories + totalC });
    this.setState({ todayFood: this.state.todayFood.concat(e) });
  };

  render() {
    const { foodList, searchBar, todayFood, totalCalories } = this.state;
    const filteredFood = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchBar.toLowerCase())
    );
    return (
      <div>
        <div>
          <h3 className="title is-3">Iron Nutrition</h3>
          <input
            className="input"
            onChange={this.handleChange}
            name="searchBar"
            type="text"
            placeholder="Find food.."
          />
        </div>
        <div className="columns">
          <div className="column">
            <FoodBox food={filteredFood} updateFood={this.updateFood} />
          </div>
          <div className="column">
            <h4 className="subtitle is-4">Today's Food</h4>
            <ul>
              {todayFood.map((food, i) => {
                let cal = food.quantity * food.calories;
                return (
                  <li key={i}>
                    {food.quantity}x {food.name} = {cal} calories
                  </li>
                );
              })}
            </ul>
            <p>Total: {totalCalories} calories</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
