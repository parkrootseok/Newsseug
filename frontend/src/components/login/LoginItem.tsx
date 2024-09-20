import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { redirectToLogin } from 'apis/loginApi';
import { LoginItemProps } from '@/types/login';

function LoginItem({ icon, provider }: Readonly<LoginItemProps>) {
  const handleLogin = () => {
    redirectToLogin(provider);
  };

  return <LoginItemContainer onClick={handleLogin}>{icon}</LoginItemContainer>;
}

export default LoginItem;

const LoginItemContainer = styled.div`
  cursor: pointer;
`;
