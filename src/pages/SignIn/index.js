import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form>
        <Input
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Digite seu e-mail"
        />
        <Input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
