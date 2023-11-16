import React, { useState } from 'react';

const Connexion = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: identifier,
        password: password,
      }),
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Identifiant:
        <input
          type="text"
          name="identifier"
          value={identifier}
          onChange={handleIdentifierChange}
        />
      </label>
      <br />
      <label>
        Mot de passe:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Connexion;
