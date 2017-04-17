import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const { forecastResult } = this.props.location.state;
    const dayIndex = this.props.location.hash.replace('#', '');
    const detailedForecast = forecastResult.list[dayIndex];
    return (
      <div>
        <h1>Detail view for</h1>
        <ul>
          {Object.keys(detailedForecast).map(objProp => (
            <li>{`${objProp}: ${detailedForecast[objProp]}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Detail;
