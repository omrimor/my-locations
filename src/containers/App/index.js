/**
 *
 * App
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect, BrowserRouter as Router, } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';


import configureStore from 'configureStore';

import CategoryPage from 'containers/CategoryPage';
import LocationPage from 'containers/LocationPage';
import Footer from 'components/Footer';

export default function App() {
  // const test = 1;
  // Create redux store with history
  const initialState = {};
  // const history = createHistory();
  const store = configureStore(initialState);
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="container">
            <Switch>
              <Route exact path='/' render={() => {
              return <Redirect to='/category' />
              }} />
              <Route exact path="/category" component={CategoryPage} />
              <Route exact path="/location" component={LocationPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
