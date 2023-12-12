import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="colored"
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

export default ToastMessage;
