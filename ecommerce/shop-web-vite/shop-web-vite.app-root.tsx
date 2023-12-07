import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { ShopWebVite } from './shop-web-vite.js';

/**
 * comment this in for server-side rendering (ssr) and comment
 * out of the root.render() invocation below.
 */
hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <ShopWebVite />
  </BrowserRouter>
);

/**
 * mounting for client side rendering.
 */
// const container = document.getElementById('root');
// const root = createRoot(container!);

// root.render(
//   <BrowserRouter>
//     <ShopWebVite />
//   </BrowserRouter>
// );
