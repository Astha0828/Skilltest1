import React, { useEffect, useState } from 'react';

function App() {
  const [devMsg, setDevMsg] = useState('');
  const [prodMsg, setProdMsg] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DEV_API}/`)
      .then(res => res.text())
      .then(setDevMsg);

    fetch(`${process.env.REACT_APP_PROD_API}/`)
      .then(res => res.text())
      .then(setProdMsg);
  }, []);

  return (
    <div>
      <h1>Ticket Management App</h1>
      <p><strong>Dev Backend:</strong> {devMsg}</p>
      <p><strong>Prod Backend:</strong> {prodMsg}</p>
    </div>
  );
}

export default App;