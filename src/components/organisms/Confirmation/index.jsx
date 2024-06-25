import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  console.log(useLocation());

  const { state } = useLocation();
  return (
    <>
      <h1> Hi {state.name},</h1>
      <p> You have been registered with the following email: {state.email}</p>
    </>
  );
};

export default Confirmation;
