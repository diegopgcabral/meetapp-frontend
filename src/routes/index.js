import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import NewMeetup from '~/pages/Meetups/NewMeetup';
import EditMeetup from '~/pages/Meetups/EditMeetup';
import Details from '~/pages/Meetups/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup/new" exact component={NewMeetup} isPrivate />
      <Route path="/meetup/edit/:id" exact component={EditMeetup} isPrivate />
      <Route path="/meetup/details/:id" exact component={Details} isPrivate />

      <Route path="/" component={() => <h1>Erro 404</h1>} />
    </Switch>
  );
}
