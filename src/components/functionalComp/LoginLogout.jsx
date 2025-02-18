import React, { useState } from 'react';

const ToggleView = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  const toggle = () => {
    setLoggedIn(!LoggedIn);
  };

  return (
    <div>
      <h1>Login and Logout</h1>
      <button onClick={toggle}>{LoggedIn ? "Switch to Login" : "Switch to Logout"}</button>
      {LoggedIn ? <h3>Logged Out Successfully!</h3> : <h3>Logged In Successfully!</h3>}
    </div>
  );
};

export default ToggleView;
