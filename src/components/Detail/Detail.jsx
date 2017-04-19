import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ location }) => {
  const { forecastResult } = location.state;
  const dayIndex = location.hash.replace('#', '');
  const detailedForecast = forecastResult.list[dayIndex];
  return (
    <div>
      <h1>Detail view for</h1>
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
