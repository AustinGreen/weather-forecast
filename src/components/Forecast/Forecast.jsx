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
  componentWillMount() {
    const isCurrent = true
      ? `${PATH_BASE}${PATH_SEARCH}${this.props.match.params.city}&${PARAM_TYPE}&${PARAM_APPID}`
      : `${PATH_BASE}${PATH_FORECAST}${this.props.match.params.city}&${PARAM_TYPE}&${PARAM_APPID}&${PARAM_DAYS}`;
    fetch(isCurrent).then(response => response.json()).then(result => console.log(result));
  }

  render() {
    return (
      <div>
        <div
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          <h1 className="title title--white">Your Results</h1>
        </div>
      </div>
    );
  }
}

export default Forecast;
