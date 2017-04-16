import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_TYPE,
  PARAM_APPID,
  PATH_FORECAST,
  PARAM_DAYS,
} from '../../constants';

const Days = ({ result, match }) => (
  <ul>
    {result.list.map(days => (
      <li>
        <Link to={`${match.url}/details`}>
          {Math.round(1.8 * (days.temp.day - 273) + 32)} ºF
        </Link>
      </li>
    ))}
  </ul>
);

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      isLoading: true,
    };

    this.updateResult = this.updateResult.bind(this);
  }

  componentWillMount() {
    fetch(
      `${PATH_BASE}${PATH_FORECAST}${this.props.match.params.city}&${PARAM_TYPE}&${PARAM_APPID}&${PARAM_DAYS}`,
    )
      .then(response => response.json())
      .then(result => this.updateResult(result));
  }

  updateResult(result) {
    this.setState({
      result,
      isLoading: false,
    });
  }

  render() {
    const { result, isLoading } = this.state;
    const { match } = this.props;
    console.log(result, this.props);
    return (
      <div>
        <div
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          {isLoading
            ? <p>Loading</p>
            : <div>
              <h1 className="title">{result.city.name} Forecast</h1>
              <Days match={match} result={result} />
            </div>}
        </div>
      </div>
    );
  }
}

export default Forecast;
