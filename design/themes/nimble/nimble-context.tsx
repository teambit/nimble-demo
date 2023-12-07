import { createContext } from 'react';
import theme from './theme';

export type NimbleContextType = {};

export const NimbleContext = createContext<NimbleContextType>({ theme });
