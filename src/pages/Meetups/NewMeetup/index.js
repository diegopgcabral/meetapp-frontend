import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/service/api';
import history from '~/service/history';

import BannerInput from '~/pages/Meetups/component/BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string()
    .max(145, 'Descrições não podem ter mais de 145 caracteres.')
    .required('A descrição é obrigatória'),
  date: Yup.date()
    .required('A data é obrigatória')
    .min(new Date(), 'Meetups só podem ser criados para datas futuras'),
  location: Yup.string().required('O local é obrigatório'),
});

export default function FormAdd() {
  async function handleSubmit(e) {
    try {
      const meetup = { ...e };
      const response = await api.post('meetups/', meetup);

      const { id } = response.data;

      toast.success('Meetup criado com sucesso!');
      history.push(`/meetups/details/${id}`);
    } catch (err) {
      toast.error('Erro ao cadastrar o meetup');
    }
  }
  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input
          name="title"
          autoComplete="off"
          placeholder="Título do meetup"
          type="text"
        />

        <Textarea
          name="description"
          autoComplete="off"
          placeholder="Descrição completa"
          type="text"
        />

        <DatePicker name="date" />

        <Input
          name="location"
          autoComplete="off"
          placeholder="Localização"
          type="text"
        />

        <Button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
        </Button>
      </Form>
    </Container>
  );
}
