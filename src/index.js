import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './css/custom.css';
import App from './components/App';
import Forecast from './components/Forecast';
import Detail from './components/Detail';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/forecast/:city" component={Forecast} />
      <Route path="/forecast/:city/details" component={Detail} />
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
