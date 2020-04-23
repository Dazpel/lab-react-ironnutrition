import React from 'react';
import 'bulma/css/bulma.css';

export const FoodBox = ({ food, updateFood, updateTodayFoods }) => {
 
  console.log();
  return food.map((item, i) => (
    <div className="box" key={i}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={item.image} alt={item.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.name}</strong> <br />
              <small>{item.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input min="1" className="input" type="number" value={item.quantity} onChange={(event) =>
                  updateFood(event, i,item)
                }/>
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() =>
                  updateTodayFoods(i,item)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  ));
};
