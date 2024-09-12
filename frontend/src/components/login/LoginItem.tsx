import { LoginItemProps } from '@/types/login';
import styled from 'styled-components';

function LoginItem({ icon }: Readonly<LoginItemProps>) {
  return <LoginItemContainer>{icon}</LoginItemContainer>;
}

export default LoginItem;

const LoginItemContainer = styled.div``;
