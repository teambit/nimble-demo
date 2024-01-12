import { Routes, Route } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { Box, CssBaseline, GlobalStyles, MenuItem } from '@mui/material';
import { PageHeader } from '@bit-nimble/ecommerce.blocks.page-header';
import { NimbleProvider } from '@bit-nimble/design.themes.nimble';
import { supportActionItem } from '@bit-nimble/support.header-action-item';
import { checkoutActionItem } from '@bit-nimble/checkout.checkout-action-item';
import { createEmotionCache } from './emotion-cache.js';

export function SupportNavMenuContent() {
  return (
    <div>
      <MenuItem>Help</MenuItem>
      <MenuItem>FAQ</MenuItem>
      <MenuItem>Contact</MenuItem>
    </div>
  );
}

export function ShopWebLayout() {
  return (
    <div>
      <PageHeader
        actionItems={[
          supportActionItem,
          checkoutActionItem,
          {
            id: 'account',
            title: 'Account',
            icon: '👤',
          },
        ]}
        navItems={[
          {
            id: 'home',
            title: 'Home',
            icon: '🏠',
            menuContent: <div>Home Menu Content</div>,
          },
          {
            id: 'shop',
            title: 'Shop',
            icon: '🛍️',
          },
          {
            id: 'about',
            title: 'About',
            icon: '📄',
          },
        ]}
      />
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

export function ShopWeb() {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <NimbleProvider>
        <CssBaseline />
        <GlobalStyles styles={{ body: { backgroundColor: '#DEDEDE' } }} />
        <Routes>
          <Route path="/" element={<ShopWebLayout />} />
        </Routes>
      </NimbleProvider>
    </CacheProvider>
  );
}
