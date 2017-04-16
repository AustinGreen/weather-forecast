import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { PATH_BASE, PATH_SEARCH, PARAM_TYPE, PARAM_APPID } from '../../constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
    };

    // Bind class methods to object instances
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSearchSubmit(e) {
    const { searchTerm } = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}${searchTerm}&${PARAM_TYPE}&${PARAM_APPID}`)
      .then(response => response.json())
      .then(result => console.log(result));
    e.preventDefault();
  }

  render() {
    // const { searchTerm } = this.state;
    return (
      <div>
        <div
          className="section section--transparent column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          <h1 className="title title--white">Enter your city and state</h1>
          <form onSubmit={this.onSearchSubmit} className="field has-addons has-addons-centered">
            <p className="control">
              <input
                onChange={this.onSearchChange}
                className="input"
                type="text"
                placeholder="New York, NY"
              />
            </p>
            <p className="control">
              <button type="submit" className="button is-primary">
                Search
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
