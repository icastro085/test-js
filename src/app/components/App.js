import React from 'react';
import Login from './Login';

const App = () => {
  const { useCallback, useState } = React;
  const [loggedIn, setLoggeId] = useState(false);

  const onSignIn = useCallback(() => {
    setTimeout(() => setLoggeId(true), 1000);
  });

  return (
      loggedIn
      ? <p className="logged-in-message">Logged</p>
      : <Login onSignIn={onSignIn}/>
  );
};

export default App;
