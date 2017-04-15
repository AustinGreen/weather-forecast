import 'bulma/css/bulma.css';
import './css/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/App';

const RouterParent = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

ReactDOM.render(<RouterParent />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
