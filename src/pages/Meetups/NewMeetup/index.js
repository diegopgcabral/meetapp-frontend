import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';

import DatePicker from '~/components/DatePicker';
import BannerInput from '~/pages/Meetups/component/BannerInput';

import api from '~/service/api';
import { getError } from '~/util/errorHandler';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner: Yup.number().required('O banner é obrigatório'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string()
    .max(255, 'Descrição não pode ter mais de 255 caracteres')
    .required('A descrição é obrigatória'),
  date: Yup.date()
    .required('A data é obrigatória')
    .min(new Date(), 'Meetup só pode ser criado para data futura'),
  local: Yup.string().required('O local é obrigatório'),
});

export default function NewMeetup({ history }) {
  async function handleSubmit({
    title,
    description,
    localization,
    date,
    banner_id,
  }) {
    try {
      console.tron.log('teste');
      await api.post('meetups', {
        title,
        description,
        localization,
        date,
        banner_id,
      });

      toast.success('Meetup cadastrado com sucesso!');
      history.push('/');
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
          multiline
        />

        <DatePicker name="date" />

        <Input
          name="location"
          type="text"
          autoComplete="off"
          placeholder="Localização"
        />
        <Button type="submit">
          <MdSave size={20} />
          Salvar Meetup
        </Button>
      </Form>
    </Container>
  );
}

NewMeetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
