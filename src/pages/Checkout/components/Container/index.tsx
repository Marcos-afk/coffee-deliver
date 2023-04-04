import * as Styled from './styles';
import { ContainerProps } from './ContainerProps';

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
