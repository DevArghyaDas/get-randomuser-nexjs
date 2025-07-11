"use client";

import { Flip, ToastContainer } from "react-toastify";

const ToastComp = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1200}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
};

export default ToastComp;
