import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Button } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          autoComplete="off"
          placeholder="Nome completo"
        />
        <Input
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Digite seu e-mail"
        />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          autoComplete="off"
          placeholder="Senha atual"
        />
        <Input
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Nova Senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          autoComplete="off"
          placeholder="Confirmação de senha"
        />
        <Button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar Perfil
        </Button>
      </Form>
    </Container>
  );
}
