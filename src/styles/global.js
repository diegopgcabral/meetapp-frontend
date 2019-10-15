import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(180deg, #22202C, #402845);
    color: #fff
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #f94d6a;
    }
  }
`;
