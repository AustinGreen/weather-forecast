/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { shallow } from 'enzyme';

describe('Detail', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Detail />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Detail />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
