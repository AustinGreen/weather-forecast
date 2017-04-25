import React from 'react';
import PropTypes from 'prop-types';
import TransparentBackground from '../../shared/Backgrounds';

const Detail = ({ location }) => {
  const { forecastResult } = location.state;
  const dayIndex = location.hash.replace('#', '');
  const detailedForecast = forecastResult.list[dayIndex];
  return (
    <div className="column is-8 is-offset-2">
      <ul>
        {Object.keys(detailedForecast).map(objProp => (
          <li key={objProp}>{`${objProp}: ${detailedForecast[objProp]}`}</li>
        ))}
      </ul>
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
