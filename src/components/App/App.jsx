import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sky from './Sky';

const SkyLandscape = styled.div`
  background-color: #65bffd;
  @media (max-width: 1000px) {
    height: 100vh;
  }
`;

const HomeHeading = styled.h1`
  color: #fff;
`;

const TransparentBackground = styled.div`
  background-color: rgba(0, 0, 0, 0);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    // Bind class methods to object instances
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSearchSubmit(e) {
    const { searchTerm } = this.state;
    const { history } = this.props;
    history.push(`/forecast/${searchTerm}`);
    e.preventDefault();
  }

  render() {
    return (
      <SkyLandscape>
        <Sky />
        <TransparentBackground
          className="section column is-half
          is-offset-one-quarter is-large has-text-centered"
        >
          <HomeHeading className="title">Enter your city and state</HomeHeading>
          <form onSubmit={this.onSearchSubmit} className="field has-addons has-addons-centered">
            <p className="control">
              <input
                onChange={this.onSearchChange}
                className="input"
                type="text"
                placeholder="New York, NY"
              />
            </p>
            <p className="control">
              <button type="submit" className="button is-primary">
                Search
              </button>
            </p>
          </form>
        </TransparentBackground>
      </SkyLandscape>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
