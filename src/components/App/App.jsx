import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="section section--transparent column is-half is-offset-one-quarter is-large has-text-centered">
          <h1 className="title title--white">Enter your city and state</h1>
          <div className="field has-addons has-addons-centered">
            <p className="control">
              <input className="input" type="text" placeholder="New York, NY" />
            </p>
            <p className="control">
              <a className="button is-primary">
                Search
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
