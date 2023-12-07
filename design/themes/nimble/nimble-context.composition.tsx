import { Box, Typography } from '@mui/material';
import { NimbleProvider } from './nimble-context-provider';

export const BasicUsage = () => {
  return (
    <NimbleProvider>
      <Box sx={{ p: 2, bgcolor: 'primary.main' }}>
        <Typography variant="h1" sx={{ color: 'white' }}>
          Hola!
        </Typography>
        <Typography variant="h2" sx={{ color: 'white' }}>
          Styled with the Nimble theme provider!
        </Typography>
      </Box>
    </NimbleProvider>
  );
};
