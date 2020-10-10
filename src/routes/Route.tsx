import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';

import DefaultLayout from '../pages/_layout/Default';
import AuthLayout from '../pages/_layout/Auth';
import useLocalStorage from '../hook/useLocalStorage';
import { useAuth } from '../contexts/Auth';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const user = false;

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = !user ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
