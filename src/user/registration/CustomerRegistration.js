import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import ToastMessage from '../../common-components/Toast';
import { toast } from 'react-toastify';
import * as authAction from "../../reducer-store/actions/authActions";
import { isValidEmail } from '../../common-components/formValidator';

const CustomerRegistration = () => {
  const [objData, setObjData] = useState({});
  const { customerRegister } = authAction;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail(objData?.email)) {
      let resData = await customerRegister(objData);
      
      if (resData?.error) {
        toast.error(resData?.errorMsg);
        return;
      }
      else {
        toast.success(resData?.msg);
        return;
      }
    } else {
      console.log("Not a valid email")
    }
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
