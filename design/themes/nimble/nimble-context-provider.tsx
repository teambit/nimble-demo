import type { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { NimbleContext, NimbleContextType } from './nimble-context';

import theme from './theme';

export type NimbleProviderProps = {
  children: ReactNode;
} & NimbleContextType;

export function NimbleProvider({ children }: NimbleProviderProps) {
  return (
    <NimbleContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NimbleContext.Provider>
  );
}
