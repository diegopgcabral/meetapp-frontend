import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { format } from 'util';
import api from '~/service/api';

import { Container, MeetupList, Meetup } from './styles';

const formatDate = d =>
  format(d, "dd MMMM yyyy' ,às ' H:mm aa", { locale: pt });

export default function Dashboard({ history }) {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date] = useState(new Date());

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <aside>
          <nav>
            <Link to="/meetup/new">
              <MdAddCircleOutline size={20} />
              Novo Meetup
            </Link>
          </nav>
        </aside>
      </header>

      <MeetupList>
        <Meetup>
          <strong>Meetup Teste</strong>
          <time>15/10/2019</time>
          <MdChevronRight size={20} />
        </Meetup>
      </MeetupList>
    </Container>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
