/* eslint-disable no-mixed-operators */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Footer from '../../shared/Footer';
import { SkyLandscape } from '../../shared/Sky';
import TransparentBackground from '../../shared/Backgrounds';
import icon01d from '../../img/weather-icons/01d.svg';
import icon01n from '../../img/weather-icons/01n.svg';
import icon02d from '../../img/weather-icons/02d.svg';
import icon02n from '../../img/weather-icons/02n.svg';
import icon03d from '../../img/weather-icons/03d.svg';
import icon03n from '../../img/weather-icons/03n.svg';
import icon04d from '../../img/weather-icons/04d.svg';
import icon04n from '../../img/weather-icons/04n.svg';
import icon09d from '../../img/weather-icons/09d.svg';
import icon09n from '../../img/weather-icons/09n.svg';
import icon10d from '../../img/weather-icons/10d.svg';
import icon10n from '../../img/weather-icons/10n.svg';
import icon11d from '../../img/weather-icons/11d.svg';
import icon11n from '../../img/weather-icons/11n.svg';
import icon13d from '../../img/weather-icons/13d.svg';
import icon13n from '../../img/weather-icons/13n.svg';
import icon50d from '../../img/weather-icons/50d.svg';
import icon50n from '../../img/weather-icons/50n.svg';

const icons = {
  icon01d,
  icon01n,
  icon02d,
  icon02n,
  icon03d,
  icon03n,
  icon04d,
  icon04n,
  icon09d,
  icon09n,
  icon10d,
  icon10n,
  icon11d,
  icon11n,
  icon13d,
  icon13n,
  icon50d,
  icon50n,
};

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
      <div>
        <SkyLandscape>
          <TransparentBackground
            className="section column is-10
  is-offset-1 is-medium has-text-centered"
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
        </SkyLandscape>
        <Footer />
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
