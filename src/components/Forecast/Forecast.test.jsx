/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Forecast from './Forecast';
import { shallow } from 'enzyme';

describe('Forecast', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Forecast />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Forecast />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
