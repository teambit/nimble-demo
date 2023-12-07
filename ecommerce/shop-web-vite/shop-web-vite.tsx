import { Routes, Route } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import { PageHeader } from '@bit-nimble/ecommerce.blocks.page-header';
import { NimbleProvider } from '@bit-nimble/design.themes.nimble';
import { createEmotionCache } from './emotion-cache';

export function ShopWebViteLayout() {
  return (
    <div>
      <PageHeader actionItems={[]} navItems={[]} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        Main content area
      </Box>
    </div>
  );
}

export function ShopWebVite() {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <NimbleProvider>
        <CssBaseline />
        <GlobalStyles styles={{ body: { backgroundColor: '#DEDEDE' } }} />
        <Routes>
          <Route path="/" element={<ShopWebViteLayout />} />
        </Routes>
      </NimbleProvider>
    </CacheProvider>
  );
}
