import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { config } from '../const';
import ToastMessage from '../Toast';

const AdminLogin = () => {
  const [objData, setObjData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/login-admin", objData, config)
      .then((res) => toast.success(res?.data?.msg), setObjData({}))
      .catch((err) => toast.error(err?.response?.data?.errorMsg))
  };

  return (
    <Container maxWidth="sm">
      <ToastMessage />
      <Typography variant="h4" gutterBottom>
        Admin Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          fullWidth
          margin="normal"
          value={objData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          fullWidth
          margin="normal"
          value={objData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default AdminLogin;
