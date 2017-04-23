/* eslint-disable no-mixed-operators */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Loader = styled.a`
  font-size: 3rem;
  border: 0;
`;

const Card = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    transform: scale(1.1);
  }
`;

const Days = ({ forecastResult, match }) => (
  <div className="columns">
    {forecastResult.list.map((days, i) => {
      const tempCelsius = days.temp.day - 273;
      const tempF = tempCelsius * 1.8 + 32;
      const dateObject = new Date(days.dt * 1000);
      const formattedDate = moment(dateObject).format('dddd[,] MMMM Do');
      return (
        <div key={days.dt} className="column">
          <Link
            to={{
              pathname: `${match.url}/details`,
              hash: `#${i}`,
              state: { forecastResult },
            }}
          >
            <Card className="card">
              <div className="card-content">
                <p>
                  {formattedDate}
                </p>
                {Math.round(tempF)} ºF
              </div>
            </Card>
          </Link>
        </div>
      );
    })}
  </div>
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
          className="section column is-10
          is-offset-1 has-text-centered"
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
