import styled from 'styled-components';

export const Container = styled.div`
  width: 940px;
  max-width: 90vw;
  margin: 2rem auto;
  form {
    input[type='text'],
    textarea {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 0.75rem 1.25rem;
      border-radius: 0.25rem;
      color: white;
    }
    textarea {
      height: 200px;
    }
    > div {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #f94d6a;
  border-radius: 0.25rem;
  margin-left: auto;
  padding: 0.75rem 1.25rem;
  font-weight: bold;
  color: #fff;
  transition: opacity 0.3s ease-in-out;
  + button {
    margin-left: 1rem;
  }
  &:hover {
    opacity: 0.9;
  }
  svg {
    margin-right: 0.5rem;
  }
`;
