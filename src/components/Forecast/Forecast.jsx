/* eslint-disable no-mixed-operators */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import icons from '../../shared/Icons';
import TransparentBackground from '../../shared/Backgrounds';

const Loader = styled.a`
  font-size: 3rem;
  border: 0;
`;

const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em auto 1em;
`;

const Card = styled.div`
  transition: all 0.2s ease-in-out;
  background-color: rgba(255,255,255,0.7);
  &:hover {
    box-shadow: 0 4px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    transform: scale(1.1);
  }
`;

const Days = ({ forecastResult, match }) => (
  <div className="columns">
    {forecastResult.list.map((days, i) => {
      const dateObject = new Date(days.dt * 1000);
      const formattedDate = moment(dateObject).format('ddd[,] MMMM Do');
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
                <p className="subtitle is-4">{formattedDate}</p>
                <p className="title is-2">{Math.round(days.temp.day)} ºF</p>
                <ImageContainer className="image is-128x128">
                  <img src={icons[`icon${days.weather[0].icon}`]} alt="" />
                </ImageContainer>
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
      <TransparentBackground
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
      </TransparentBackground>
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
