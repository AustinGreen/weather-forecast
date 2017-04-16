import 'bulma/css/bulma.css';
import './css/custom.css';
import App from './components/App';
import Forecast from './components/Forecast';
import Detail from './components/Detail';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const RouterParent = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/forecast/:city/details" component={Detail} />
        <Route path="/forecast/:city" component={Forecast} />
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<RouterParent />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
