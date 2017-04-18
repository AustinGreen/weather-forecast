/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { shallow } from 'enzyme';
import { forecastTestData } from './fixtures';

describe('Detail', () => {
  it('renders', () => {
    const div = document.createElement('div');
    const forecastResult = forecastTestData;
    ReactDOM.render(
      <Detail
        location={{
          hash: '#1',
          state: { forecastResult },
        }}
      />,
      div,
    );
  });

  test('snapshots', () => {
    const forecastResult = forecastTestData;
    const component = renderer.create(
      <Detail
        location={{
          hash: '#1',
          state: { forecastResult },
        }}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
