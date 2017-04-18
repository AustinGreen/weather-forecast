/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
