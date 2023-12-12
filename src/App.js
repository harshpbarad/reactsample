// App.js
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import CustomerRegistration from './Customer/CustomerRegistration';
import AdminRegistration from './Admin/AdminRegistration';
import AdminLogin from './Admin/AdminLogin';
import Register from './Register';

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
