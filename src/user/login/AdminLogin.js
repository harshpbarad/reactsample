import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import ToastMessage from '../../common-components/Toast';
import { bindActionCreators } from "redux";
import * as authAction from "../../reducer-store/actions/authActions";
import { useDispatch } from 'react-redux';
import { isValidEmail } from '../../common-components/formValidator';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { AdminLogin } = bindActionCreators(authAction, dispatch);
  const [objData, setObjData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail(objData?.email)) {
      let resData = await AdminLogin(objData);

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
