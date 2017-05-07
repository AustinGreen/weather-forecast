import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import App from './components/App';
import Forecast from './components/Forecast';
import Detail from './components/Detail';
import Sky, { SkyLandscape } from './shared/Sky';
import Footer from './shared/Footer';

const router = (
  <Router>
    <div>
      <SkyLandscape>
        <Sky />
        <Route exact path="/" component={App} />
        <Route path="/forecast/:city" component={Forecast} />
        {/* <Route path="/forecast/:city/details" component={Detail} /> */}
      </SkyLandscape>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
