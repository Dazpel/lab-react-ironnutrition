import React from 'react';
import 'bulma/css/bulma.css';

export const FoodBox = ({ food, updateFood }) => {
  const updateFoods = (e, i) => {
    let x = document.getElementById('quantity' + i).value;
    e.quantity = x;
    updateFood(e);
  };

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
              <small>{item.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input id={`quantity${i}`} className="input" type="number" />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => updateFoods(item, i)}
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
