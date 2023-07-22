import React from "react";

const WelcomeUser = ({ img, message }) => {
  return (
    <>
      <div className="center">
        <img src={img} alt="" />
      </div>
      <h1 className="center">{message}</h1>
    </>
  );
};

export { WelcomeUser };
