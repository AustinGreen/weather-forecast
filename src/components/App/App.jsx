import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sky, { SkyLandscape } from './Sky';
import TransparentBackground from '../../shared/Backgrounds';
import HomeHeading from '../../shared/Headings';
import { PATH_BASE, PARAM_TYPE, PARAM_APPID, PATH_FORECAST, PARAM_DAYS } from '../../constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      isError: false,
      forecastResult: '',
    };

    // Bind class methods to object instances
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDataRecieved = this.onDataRecieved.bind(this);
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onDataRecieved(forecastResult) {
    const { searchTerm } = this.state;
    const { history } = this.props;
    if (forecastResult.cod === '404') {
      this.setState({ isError: true });
    } else {
      this.setState({ forecastResult });
      history.push(`/forecast/${searchTerm}`, forecastResult);
    }
  }

  onSearchSubmit(e) {
    const { searchTerm } = this.state;
    if (searchTerm.length > 0) {
      fetch(`${PATH_BASE}${PATH_FORECAST}${searchTerm}&${PARAM_TYPE}&${PARAM_APPID}&${PARAM_DAYS}`)
        .then(response => response.json())
        .then(forecastResult => this.onDataRecieved(forecastResult));
    }
    e.preventDefault();
  }

  render() {
    return (
      <SkyLandscape>
        <Sky />
        <TransparentBackground
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          <HomeHeading className="title">Enter your city and state</HomeHeading>
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
          {this.state.isError
            ? <div className="notification is-danger">
              <button className="delete" />
                Location not found. Please try again.
              </div>
            : ''}
        </TransparentBackground>
      </SkyLandscape>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
