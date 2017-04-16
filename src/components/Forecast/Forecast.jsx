import React, { Component } from 'react';

import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_TYPE,
  PARAM_APPID,
  PATH_FORECAST,
  PARAM_DAYS,
} from '../../constants';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      isLoading: true,
    };

    this.updateResult = this.updateResult.bind(this);
  }

  componentWillMount() {
    const isCurrent = true
      ? `${PATH_BASE}${PATH_SEARCH}${this.props.match.params.city}&${PARAM_TYPE}&${PARAM_APPID}`
      : `${PATH_BASE}${PATH_FORECAST}${this.props.match.params.city}&${PARAM_TYPE}&${PARAM_APPID}&${PARAM_DAYS}`;
    fetch(isCurrent).then(response => response.json()).then(result => this.updateResult(result));
  }

  updateResult(result) {
    this.setState({
      result,
      isLoading: false,
    });
  }

  render() {
    const { result, isLoading } = this.state;
    console.log(result);
    return (
      <div>
        <div
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          <h1 className="title">Your Results</h1>
          {isLoading ? <p>Loading</p> : <p>{Math.round(1.8 * (result.main.temp - 273) + 32)} ºF</p>}
        </div>
      </div>
    );
  }
}

export default Forecast;
