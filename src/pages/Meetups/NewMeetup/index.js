import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import DatePicker from '~/components/DatePicker';
import BannerInput from '~/pages/Meetups/component/BannerInput';

import api from '~/service/api';
import history from '~/service/history';
import { getError } from '~/util/errorHandler';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string()
    .max(144, 'Descrição não pode ter mais de 144 caracteres')
    .required('A descrição é obrigatória'),
  date: Yup.date()
    .required('A data é obrigatória')
    .min(new Date(), 'Meetup só pode ser criado para data futura'),
  location: Yup.string().required('O local é obrigatório'),
});

export default function NewMeetup() {
  async function handleSubmit(e) {
    try {
      const newMeetup = { ...e };
      const response = await api.post('meetups', newMeetup);

      const { id } = response.data;

      toast.success('Meetup cadastrado com sucesso!');
      history.push(`/meetup/details/${id}`);
    } catch (err) {
      toast.error(getError(err) || 'Erro ao salvar o meetup');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input
          name="title"
          type="text"
          autoComplete="off"
          placeholder="Título do Meetup"
        />
        <Textarea
          name="description"
          type="text"
          autoComplete="off"
          placeholder="Descrição completa"
        />

        <DatePicker name="date" />

        <Input
          name="location"
          type="text"
          autoComplete="off"
          placeholder="Localização"
        />
        <Button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar Meetup
        </Button>
      </Form>
    </Container>
  );
}
