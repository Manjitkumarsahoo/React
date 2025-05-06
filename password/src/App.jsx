import React, { useState } from 'react';
import './App.css';

function password(str) {
  if (str.length <= 6) return 0;

  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
      flag |= 1; // 0001
    } else if (char >= 'a' && char <= 'z') {
      flag |= 2; // 0010
    } else if (char >= '0' && char <= '9') {
      flag |= 4; // 0100
    } else {
      flag |= 8; // 1000 (symbol)
    }
  }

  return flag;
}

function App() {
  const [pwd, setPwd] = useState('');
  const flag = password(pwd);

  const rules = [
    { label: 'Must be exactly 6 characters', valid: pwd.length >= 6 },
    { label: 'At least one uppercase letter', valid: (flag & 1) !== 0 },
    { label: 'At least one lowercase letter', valid: (flag & 2) !== 0 },
    { label: 'At least one digit', valid: (flag & 4) !== 0 },
    { label: 'At least one symbol', valid: (flag & 8) !== 0 },
  ];

  return (
    <div className="container">
      <h2>Password Validator</h2>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Enter password"
        className="password-input"
      />
      <ul className="rules-list">
        {rules.map((rule, index) => (
          <li
            key={index}
            className={`rule ${rule.valid ? 'valid' : ''}`}
          >
            {rule.label}
          </li>
        ))}
      </ul>
      {flag === 15 && pwd.length === 6 && (
        <div className="success">Password is valid!</div>
      )}
    </div>
  );
}

export default App;
