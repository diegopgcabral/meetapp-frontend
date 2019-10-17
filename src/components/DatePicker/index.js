import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState();
  registerLocale('pt', pt);

  useEffect(() => {
    if (defaultValue) {
      setSelected(parseISO(defaultValue));
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        timeFormat="HH:mm"
        withPortal
        timeCaption="Hora"
        locale="pt"
        dateFormat="dd/MM/yyyy h:mm aa"
        size={20}
        minDate={new Date()}
        autoComplete="off"
        placeholderText="Escolha uma data e horário"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
