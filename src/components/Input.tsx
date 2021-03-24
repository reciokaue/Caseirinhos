import React from 'react';

import { Container } from '../styles/Input';

interface PropsInterface {
  placeholder?: string;
  type?: string;
  state: Function;
}
const Input: React.FC<PropsInterface> = (Props) => {
    return (
      <Container>
        <input
          autoComplete="off"
          required
          type={Props.type === 'email'? 'text': Props.type}
          id={Props.placeholder}
          className={Props.type === 'email'? 'emailInput': ''}
          onChange={(event) => Props.state(event.target.value)}
          />
        <label htmlFor={Props.placeholder}>{Props.placeholder}</label>
      </Container>
    );
};

export default Input;
