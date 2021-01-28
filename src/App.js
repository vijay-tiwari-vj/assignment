import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import ProfileDashboard from './components/ProfileDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/profile/:id" component={ProfileDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
