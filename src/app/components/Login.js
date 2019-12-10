import React from 'react';

const Login = ({ onSignIn = () => {} }) => (
  <form
    className="form-login"
    onSubmit={(e) => {
      e.preventDefault();
      onSignIn();
    }} >
    <h3>Enter with user and password</h3>

    <hr />

    <input type="text" name="username" />
    <input type="password" name="password" />

    <hr />

    <button type="submit">
      Sign In
    </button>
  </form>
);

export default Login;
