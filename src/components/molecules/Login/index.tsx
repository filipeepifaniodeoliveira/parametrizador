import React, { useState } from 'react';
import * as S from './styles';

export const Login = (): JSX.Element => {
  const [open, setOpen] = useState(true);

  return (
    <S.ContainerGlobal>
      <div className="page">
        <form method="POST" className="formLogin">
          <h1>Login</h1>
          <p>Digite os seus dados de acesso no campo abaixo.</p>
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" />
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Digite seu e-mail" />
          <a href="/">Esqueci minha senha</a>
          <input type="submit" value="Acessar" className="btn" />
        </form>
      </div>
    </S.ContainerGlobal>
  );
};

export default Login;
