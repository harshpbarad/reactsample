// App.js
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import CustomerRegistration from './user/registration/CustomerRegistration';
import AdminRegistration from './user/registration/AdminRegistration';
import AdminLogin from './user/login/AdminLogin';
import Register from './common-components/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Register} />
      <Route path="/customer-registration" Component={CustomerRegistration} />
      <Route path="/admin-registration" Component={AdminRegistration} />
      <Route path="/admin-login" Component={AdminLogin} />
    </Routes>
  );
};

export default App;
