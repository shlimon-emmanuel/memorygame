import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique d'authentification avec votre backend
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Connexion</h2>
      <div>
        <label>Nom d'utilisateur :</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Auth; 