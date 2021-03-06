import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/service/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';

import { getError } from '~/util/errorHandler';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(
      getError(err) || 'Erro ao atualizar o perfil, confira seus dados!'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
