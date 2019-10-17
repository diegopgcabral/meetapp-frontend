import { takeLatest, all, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '~/service/history';
import api from '~/service/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

import { getError } from '~/util/errorHandler';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorizarion = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error(getError(err) || 'Falha na autenticação. Verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());

    history.push('/');
    toast.success('Parabéns! Você está registrado!');
  } catch (err) {
    toast.error(getError(err) || 'Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
