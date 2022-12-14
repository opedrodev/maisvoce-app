import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../images/maisvocelogo.svg';

import styles from '../styles/login/Login.module.scss';

function Login() {
  const [email, emailChange] = useState('');
  const [password, passwordChange] = useState('');
  const history = useHistory();

  // Função que valida o email e o password, alterando o button
  const validadeButton = () => {
    const magicNumber = 6;
    const emailRegex = /^[a-z0-9.-_-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validate = emailRegex.test(email) && password.length > magicNumber;
    return !validate;
  };

  const saveUserLocalStorage = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({ email }),
    );
    history.push('/meals');
  };

  return (
    <div className={ styles.login }>
      <div className={ styles.background }>
        <img src={ logo } alt="mais voce logo" />
      </div>

      <div className={ styles.container }>
        <label htmlFor="email">
          <input
            onChange={ ({ target }) => emailChange(target.value) }
            data-testid="email-input"
            placeholder="email"
            id="email"
            type="text"
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={ ({ target }) => passwordChange(target.value) }
            data-testid="password-input"
            placeholder="password"
            id="password"
            type="password"
          />
        </label>

        <button
          onClick={ saveUserLocalStorage }
          disabled={ validadeButton() }
          data-testid="login-submit-btn"
          type="button"
        >
          Enter

        </button>
      </div>
    </div>
  );
}

export default Login;
