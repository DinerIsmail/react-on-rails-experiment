import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server';
import ReactOnRails from 'react-on-rails';

function ServerRouterApp(props, railsContext) {
  let error;
  let redirectLocation;
  let { location } = railsContext;

  // This tell react_on_rails to skip server rendering any HTML. Note, client rendering
  // will handle the redirect. What's key is that we don't try to render.
  // Critical to return the Object properties to match this { error, redirectLocation }
  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  // Allows components to add properties to the object to store
  // information about the render.
  const context = {};

  if (props.redirectTo) {
    location = props.redirectTo
  }

  // Important that you don't do this if you are redirecting or have an error.
  // eslint-disable-next-line react/display-name
  return function ServerRouter() {
    return (
      <StaticRouter location={location} context={context}>
        <Routes>
          <Route
            path="/hello_world"
            element={<div>Inductions</div>}
          />
          <Route
            path="/stores"
            element={<div>Stores</div>}
          />
          <Route
            path="/login"
            element={<div>Login</div>}
          />
        </Routes>
      </StaticRouter>
    );
  };
}

export default ServerRouterApp;