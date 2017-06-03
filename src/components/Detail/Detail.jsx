import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransparentBackground from '../../shared/Backgrounds';
import { Link } from 'react-router-dom';

const BackButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Detail = ({ location }) => {
  const { forecastResult } = location.state;
  const dayIndex = location.hash.replace('#', '');
  const detailedForecast = forecastResult.list[dayIndex];
  const forecastPath = location.pathname.replace(/\/details/, '');
  return (
    <div>
      <BackButton className="button is-black">
        <Link to={forecastPath}>
          &lt; Back
        </Link>
      </BackButton>
      <TransparentBackground className="section column is-half is-offset-one-quarter is-large has-text-centered">
        <div className="message">
          <p className="message-body title">
            The high is {Math.round(detailedForecast.temp.max)}°F, and the low is
            {' '}{Math.round(detailedForecast.temp.min)}°F.
          </p>
        </div>
      </TransparentBackground>
    </div>
  );
};

Detail.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    state: PropTypes.shape({
      forecastResult: PropTypes.object,
    }),
  }).isRequired,
};

export default Detail;
