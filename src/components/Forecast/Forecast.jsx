/* eslint-disable no-mixed-operators */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Loader = styled.a`
  font-size: 3rem;
  border: 0;
`;

const Days = ({ forecastResult, match }) => (
  <ul>
    {forecastResult.list.map((days, i) => {
      const tempCelsius = days.temp.day - 273;
      const tempF = tempCelsius * 1.8 + 32;
      return (
        <li key={days.dt}>
          <Link
            to={{
              pathname: `${match.url}/details`,
              hash: `#${i}`,
              state: { forecastResult },
            }}
          >
            {Math.round(tempF)} ºF
          </Link>
        </li>
      );
    })}
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
    this.updateResult(this.props.history.location.state);
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
    return (
      <div>
        <div
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          {isLoading
            ? <Loader className="button is-loading">
                Button
              </Loader>
            : <div>
              <h1 className="title">{forecastResult.city.name} Forecast</h1>
              <Days match={match} forecastResult={forecastResult} />
            </div>}
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    location: PropTypes.object,
    state: PropTypes.object,
  }).isRequired,
};

Days.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  forecastResult: PropTypes.shape({}).isRequired,
};

export default Forecast;
