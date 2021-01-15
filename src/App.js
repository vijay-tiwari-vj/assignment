import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import UsersContextProvider from './contexts/UsersContext';
import LandingPage from './components/LandingPage';
import ProfileDashboard from './components/ProfileDashboard';

function App() {
  return (
    <Router>
      <UsersContextProvider>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/profile/:id" component={ProfileDashboard} />
        </Switch>
      </UsersContextProvider>
    </Router>
  );
}

export default App;
