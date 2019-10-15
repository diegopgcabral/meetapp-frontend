import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Meetup from '~/pages/Meetups';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/meetup" exact component={Meetup} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />

      <Route path="/" component={() => <h1>Erro 404</h1>} />
    </Switch>
  );
}
