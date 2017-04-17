import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Sky = () => (
  <div className="sky-animations">
    <div className="sun" />
    <div className="x1"><div className="cloud" /></div>
    <div className="x4"><div className="cloud" /></div>
    <div className="x5"><div className="cloud" /></div>
    <div className="x6"><div className="cloud" /></div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
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
    const { history } = this.props;
    history.push(`/forecast/${searchTerm}`);
    e.preventDefault();
  }

  render() {
    return (
      <div className="bg-color--sky">
        <Sky />
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
