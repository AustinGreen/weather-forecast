/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Forecast from './Forecast';
import { shallow } from 'enzyme';
import forecastTestData from './fixtures';

describe('Forecast', () => {
  it('renders', () => {
    const div = document.createElement('div');
    const forecastResult = forecastTestData;
    ReactDOM.render(
      <Forecast
        history={{
          location: {
            pathname: '/forecast/london,uk',
            state: forecastResult,
          },
        }}
        match={{ params: { city: 'london,uk' } }}
        location={{
          state: { forecastResult },
        }}
      />,
      div,
    );
  });

  test('snapshots', () => {
    const forecastResult = forecastTestData;
    const component = renderer.create(
      <Forecast
        history={{
          location: {
            pathname: '/forecast/london,uk',
            state: forecastResult,
          },
        }}
        match={{ params: { city: 'london,uk' } }}
        location={{
          state: { forecastResult },
        }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
