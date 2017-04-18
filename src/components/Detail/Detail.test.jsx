/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { shallow } from 'enzyme';

describe('Detail', () => {
  it('renders', () => {
    const div = document.createElement('div');
    const forecastResult = {
      city: {
        id: 2643743,
        name: 'London',
        coord: { lon: -0.1258, lat: 51.5085 },
        country: 'GB',
        population: 0,
      },
      cod: '200',
      message: 0.6052046,
      cnt: 5,
      list: [
        {
          dt: 1492513200,
          temp: {
            day: 279.41,
            min: 275.02,
            max: 279.41,
            night: 275.02,
            eve: 279.41,
            morn: 279.41,
          },
          pressure: 1038.49,
          humidity: 50,
          weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
          speed: 4.44,
          deg: 43,
          clouds: 20,
        },
        {
          dt: 1492599600,
          temp: {
            day: 284.14,
            min: 274.36,
            max: 285.02,
            night: 278.6,
            eve: 284.32,
            morn: 274.36,
          },
          pressure: 1044.05,
          humidity: 57,
          weather: [{ id: 800, main: 'Clear', description: 'sky is clear', icon: '02d' }],
          speed: 1.86,
          deg: 88,
          clouds: 8,
        },
        {
          dt: 1492686000,
          temp: {
            day: 285.8,
            min: 278.55,
            max: 288.1,
            night: 282.32,
            eve: 287.72,
            morn: 278.55,
          },
          pressure: 1042.28,
          humidity: 64,
          weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
          speed: 3.07,
          deg: 264,
          clouds: 8,
          rain: 0.71,
        },
        {
          dt: 1492772400,
          temp: {
            day: 288.5,
            min: 279.62,
            max: 289.79,
            night: 283.56,
            eve: 289.19,
            morn: 279.62,
          },
          pressure: 1039.75,
          humidity: 66,
          weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
          speed: 3.86,
          deg: 305,
          clouds: 56,
        },
        {
          dt: 1492858800,
          temp: {
            day: 285.81,
            min: 278.83,
            max: 286.41,
            night: 278.83,
            eve: 286.41,
            morn: 280.03,
          },
          pressure: 1036.02,
          humidity: 0,
          weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
          speed: 5.34,
          deg: 320,
          clouds: 32,
          rain: 0.39,
        },
      ],
    };
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
    const forecastResult = {
      city: {
        id: 2643743,
        name: 'London',
        coord: { lon: -0.1258, lat: 51.5085 },
        country: 'GB',
        population: 0,
      },
      cod: '200',
      message: 0.6052046,
      cnt: 5,
      list: [
        {
          dt: 1492513200,
          temp: {
            day: 279.41,
            min: 275.02,
            max: 279.41,
            night: 275.02,
            eve: 279.41,
            morn: 279.41,
          },
          pressure: 1038.49,
          humidity: 50,
          weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
          speed: 4.44,
          deg: 43,
          clouds: 20,
        },
        {
          dt: 1492599600,
          temp: {
            day: 284.14,
            min: 274.36,
            max: 285.02,
            night: 278.6,
            eve: 284.32,
            morn: 274.36,
          },
          pressure: 1044.05,
          humidity: 57,
          weather: [{ id: 800, main: 'Clear', description: 'sky is clear', icon: '02d' }],
          speed: 1.86,
          deg: 88,
          clouds: 8,
        },
        {
          dt: 1492686000,
          temp: {
            day: 285.8,
            min: 278.55,
            max: 288.1,
            night: 282.32,
            eve: 287.72,
            morn: 278.55,
          },
          pressure: 1042.28,
          humidity: 64,
          weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
          speed: 3.07,
          deg: 264,
          clouds: 8,
          rain: 0.71,
        },
        {
          dt: 1492772400,
          temp: {
            day: 288.5,
            min: 279.62,
            max: 289.79,
            night: 283.56,
            eve: 289.19,
            morn: 279.62,
          },
          pressure: 1039.75,
          humidity: 66,
          weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
          speed: 3.86,
          deg: 305,
          clouds: 56,
        },
        {
          dt: 1492858800,
          temp: {
            day: 285.81,
            min: 278.83,
            max: 286.41,
            night: 278.83,
            eve: 286.41,
            morn: 280.03,
          },
          pressure: 1036.02,
          humidity: 0,
          weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
          speed: 5.34,
          deg: 320,
          clouds: 32,
          rain: 0.39,
        },
      ],
    };
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
