import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class AddFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showMod = (e) => {
    switch (e) {
      case 'open':
        document.getElementById('modal').classList.add('is-active');
        break;
      case 'close':
        document.getElementById('modal').classList.remove('is-active');
        break;
      default:
        break;
    }
  };

  liftFood = (e) => {
      e.preventDefault()
    this.props.addFood(this.state);
    document.getElementById('modal').classList.remove('is-active');
  };

  render() {
   
    return (
      <div>
        <div id="modal" className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <form onSubmit={(e) => this.liftFood(e)}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    name="name"
                    onChange={this.handleChange}
                    className="input"
                    type="text"
                    placeholder="e.g Banana"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                  <input
                    name="calories"
                    onChange={this.handleChange}
                    className="input"
                    type="number"
                    placeholder="e.g. 750"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Image Url</label>
                <div className="control">
                  <input
                    name="image"
                    onChange={this.handleChange}
                    className="input"
                    type="text"
                    placeholder="e.g. https://i.imgur.com/hGraGyR.jpg"
                  />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button
                    onClick={(e) => {
                      e.preventDefault(), this.showMod('close');
                    }}
                    className="button is-link is-light"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>

          <button
            name="close"
            className="modal-close is-large"
            aria-label="close"
            onClick={(e) => this.showMod(e.target.name)}
          ></button>
        </div>
        <button
          name="open"
          className="button"
          id="showModal"
          onClick={(e) => this.showMod(e.target.name)}
        >
          Add Food
        </button>
      </div>
    );
  }
}
