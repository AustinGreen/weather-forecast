/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';

describe('Detail', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter
        initialEntries={[
          '/forecast/antartica/',
          '/forecast/antartica/details/1',
          { pathname: '/three' },
        ]}
        initialIndex={1}
      >
        <Detail />
      </MemoryRouter>,
      div,
    );
  });

  test('snapshots', () => {
    const component = renderer.create(<Detail />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
