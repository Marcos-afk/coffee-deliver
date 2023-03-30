import styled from 'styled-components';
import { BackgroundIconStyleProps } from './IconsProps';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

`;

export const IconContainer = styled.div<BackgroundIconStyleProps>`
  display: flex;
  justify-content: center;
  background: ${({ backgroundIconColor }) => backgroundIconColor};
  padding: 0.5rem;
  border-radius: 99999px;
`;

export const Title = styled.span`
  line-height: 1.3rem;
  font-size: 1rem;
`;
