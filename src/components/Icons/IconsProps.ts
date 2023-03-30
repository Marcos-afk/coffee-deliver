import { IconBaseProps } from 'react-icons';
import * as Phosphor from 'phosphor-react';

export interface IconProps {
  icon: Phosphor.IconProps | IconBaseProps;
  background: string;
  title?: string;
}

export interface BackgroundIconStyleProps {
  backgroundIconColor: string;
}
