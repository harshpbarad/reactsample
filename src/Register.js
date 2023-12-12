import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h2" gutterBottom>
                Registration
            </Typography>
            <Button
                component={Link}
                to="/admin-register"
                variant="contained"
                color="primary"
                style={{ marginRight: '16px' }}
            >
                Register New Admin
            </Button>
            <Button
                component={Link}
                to="/customer-register"
                variant="contained"
                color="primary"
            >
                Register New Customer
            </Button>
        </Container>
    );
};

export default RegisterPage;
