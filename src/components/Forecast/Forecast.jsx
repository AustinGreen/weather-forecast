import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_TYPE,
  PARAM_APPID,
  PATH_FORECAST,
  PARAM_DAYS,
} from '../../constants';

const Days = ({ forecastResult, match }) => (
  <ul>
    {forecastResult.list.map((days, i) => (
      <li>
        <Link to={`${match.url}/details/${i}`}>
          {Math.round(1.8 * (days.temp.day - 273) + 32)} ºF
        </Link>
      </li>
    ))}
  </ul>
);

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastResult: '',
      isLoading: true,
    };

    this.updateResult = this.updateResult.bind(this);
  }

  componentWillMount() {
    const { match } = this.props;
    fetch(
      `${PATH_BASE}${PATH_FORECAST}${match.params.city}&${PARAM_TYPE}&${PARAM_APPID}&${PARAM_DAYS}`,
    )
      .then(response => response.json())
      .then(forecastResult => this.updateResult(forecastResult));
  }

  updateResult(forecastResult) {
    this.setState({
      forecastResult,
      isLoading: false,
    });
  }

  render() {
    const { forecastResult, isLoading } = this.state;
    const { match } = this.props;
    // console.log(forecastResult, this.props);
    return (
      <div>
        <div
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          {isLoading
            ? <a className="button is-loading is-loading--lg">
                Button
              </a>
            : <div>
              <h1 className="title">{forecastResult.city.name} Forecast</h1>
              <Days match={match} forecastResult={forecastResult} />
            </div>}
        </div>
      </div>
    );
  }
}

export default Forecast;
