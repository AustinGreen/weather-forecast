import 'bulma/css/bulma.css';
import './css/custom.css';
import App from './components/App';
import Forecast from './components/Forecast';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RouterParent = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/forecast/:city" component={Forecast} />
    </div>
  </Router>
);

ReactDOM.render(<RouterParent />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
