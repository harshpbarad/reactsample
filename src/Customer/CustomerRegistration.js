import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import ToastMessage from '../Toast';
import { toast } from 'react-toastify';
import axios from 'axios';
import { config } from '../const';

const CustomerRegistration = () => {
  const [objData, setObjData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resposne = await axios.post("http://localhost:5000/api/auth/register-user", objData, config)
      .then((res) => toast.success(res?.data?.msg), setObjData({}))
      .catch((err) => toast.error(err?.response?.data?.errorMsg))
  };

  return (
    <Container maxWidth="sm">
      <ToastMessage />
      <Typography variant="h4" gutterBottom>
        Customer Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="first_name"
          fullWidth
          margin="normal"
          value={objData.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="last_name"
          fullWidth
          margin="normal"
          value={objData.lastName}
          onChange={handleChange}
        />
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
          Register
        </Button>
      </form>
    </Container>
  );
};

export default CustomerRegistration;
