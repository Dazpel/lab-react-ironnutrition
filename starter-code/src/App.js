import React, { Component } from 'react';
import './App.css';
import { FoodBox } from './FoodBox';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import AddFood from './AddFood';

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

  updateFood = (e, index, item) => {
    let foodItem = {
      ...this.state.foodList[index],
      quantity: Number(e.target.value),
    };

    let copyOfFoods = [...this.state.foodList];

    copyOfFoods.splice(index, 1, foodItem);
    this.setState({
      foodList: copyOfFoods,
    });
  };

  updateTodayFoods = (index, item) => {
    let todayFood = [...this.state.todayFood];
    let calories = 0;

    if (typeof todayFood[index] === 'undefined') {
      todayFood[index] = item;
      calories = item.quantity * item.calories;
    } else {
      todayFood[index].quantity = item.quantity + todayFood[index].quantity;
      calories = item.quantity * item.calories;
    }

    this.setState({
      todayFood: todayFood,
      totalCalories: this.state.totalCalories + calories,
    });
  };

  addFood = (e) => {
    this.setState({ foodList: this.state.foodList.concat(e) });
  };

  render() {
    const {
      foodList,
      searchBar,
      todayFood,
      totalCalories,
    } = this.state;
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

        <AddFood addFood={this.addFood} />

        <div className="columns">
          <div className="column">
            <FoodBox
              food={filteredFood}
              updateFood={this.updateFood}
              updateTodayFoods={this.updateTodayFoods}
            />
          </div>
          <div className="column">
            <h4 className="subtitle is-4">Today's Food</h4>
            <ul>
              {todayFood.map((item, i) => {
                if (typeof item === 'undefined') {
                  return console.log('do nothing');
                } else {
                  let cal = item.quantity * item.calories;
                  return (
                    <li key={i}>
                      {item.quantity}x {item.name} = {cal} calories
                    </li>
                  );
                }
              })}
            </ul>
            <p>Total: <strong>{totalCalories} calories</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
