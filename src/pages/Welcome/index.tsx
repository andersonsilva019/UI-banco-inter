import React, { useState, ChangeEvent, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { useCycle, transform } from 'framer-motion';
import { useTheme } from 'styled-components';

import { Container, Form, SignInButton } from './styles';
import { BancoInterLogo } from '../../assets/images';
import Button from '../../components/Button';
import { useAuth } from '../../contexts/Auth';
import { DEFAULT_TRANSITION } from '../../constants';
import AuthLayout from '../_layout/Auth';

const animation = {
  unMounted: {
    opacity: 0,
    y: 50,
  },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      ...DEFAULT_TRANSITION,
      mass: 2,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      ...DEFAULT_TRANSITION,
      mass: 2.5,
    },
  },
};

const Welcome: React.FC = () => {
  const [inputName, setInputName] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();
  const { colors } = useTheme();
  const inputRange = [0, 4];
  const outputRange = [colors.lightGrey, colors.primary];
  const animateBackground = transform(inputRange, outputRange);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setInputName(e.target.value);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn(inputName);
    history.push('/dashboard');
  };

  return (
    <AuthLayout background={animateBackground(inputName.length)}>
      <Container
        variants={animation}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <BancoInterLogo />
        </h1>
        <h2>Seja bem vindo ao redesign da Ui do Banco Intert</h2>
        <Form onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome para entrar"
              id="name"
              value={inputName}
              onChange={handleInputChange}
            />
          </label>
          <SignInButton type="submit" disabled={!inputName}>
            Entrar no App
          </SignInButton>
        </Form>
      </Container>
    </AuthLayout>
  );
};

export default Welcome;
