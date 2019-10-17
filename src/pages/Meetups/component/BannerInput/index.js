import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdCameraAlt } from 'react-icons/md';

import api from '~/service/api';
import { getError } from '~/util/errorHandler';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    data.append('type', 'banner');

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error(getError(err) || 'Erro ao carregar o Banner');
    }
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview && <img src={preview} alt="Banner" />}

        {!preview && (
          <span>
            <MdCameraAlt size={36} />
            <strong>Selecionar imagem</strong>
          </span>
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          date-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
