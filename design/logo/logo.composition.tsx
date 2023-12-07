import { Stack, Typography } from '@mui/material';
import { Logo } from './logo';

export const BasicLogo = () => {
  return (
    <Stack gap={8}>
      <div>
        <Typography variant="body1">Small</Typography>
        <Logo size="small" />
      </div>
      <div>
        <Typography variant="body1">Medium</Typography>
        <Logo size="medium" />
      </div>
      <div>
        <Typography variant="body1">Large</Typography>
        <Logo size="large" />
      </div>
      <div>
        <Typography variant="body1">Header</Typography>
        <Logo size="header" />
      </div>
    </Stack>
  );
};
