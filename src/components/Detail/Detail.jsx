import React, { Component } from 'react';

import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_TYPE,
  PARAM_APPID,
  PATH_FORECAST,
  PARAM_DAYS,
} from '../../constants';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      isLoading: true,
    };

    this.updateResult = this.updateResult.bind(this);
  }

  componentWillMount() {
    fetch(`${PATH_BASE}${PATH_SEARCH}${this.props.match.params.city}&${PARAM_TYPE}&${PARAM_APPID}`)
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
    console.log(result);
    return (
      <div>
        <h1>Detail view for</h1>
        {isLoading ? <p>Loading</p> : <p>Worked</p>}
      </div>
    );
  }
}

export default Detail;
