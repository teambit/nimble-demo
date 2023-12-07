import { Box } from '@mui/material';
// import logo from './static/logo.png';

export type LogoSize = 'small' | 'medium' | 'large' | 'header';

export type LogoProps = {
  size?: LogoSize;
};

export function Logo({ size: sizeProp = 'medium' }: LogoProps) {
  let size: number;
  switch (sizeProp) {
    case 'small':
      size = 32;
      break;
    case 'medium':
      size = 64;
      break;
    case 'header':
      size = 72;
      break;
    case 'large':
      size = 128;
      break;
    default:
      size = 64;
      break;
  }

  return (
    <Box component="img" src="https://res.cloudinary.com/dcjvk435n/image/upload/f_auto,q_auto/nimble_logo" alt="Nimble Logo" width={size} height={size} />
  );
}
