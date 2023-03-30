import { IconProps } from './IconsProps';
import * as Styled from './styles';

export const Icons = ({ icon, background, title }: IconProps) => {
  return (
    <Styled.Container>
      <Styled.IconContainer backgroundIconColor={background}>
        <>{icon}</>
      </Styled.IconContainer>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
