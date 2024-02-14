import React from 'react';
import ReactOnRails from 'react-on-rails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function ClientRouterApp(_props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/inductions"
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
    </BrowserRouter>
  );
}

export default ClientRouterApp;