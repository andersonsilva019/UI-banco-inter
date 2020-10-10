import React from 'react';

import {
  Switch,
  Route as BaseRoute,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Route from './Route';
import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Welcome} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />

        <BaseRoute render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
