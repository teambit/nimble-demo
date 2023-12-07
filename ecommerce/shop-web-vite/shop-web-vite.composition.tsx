import { MemoryRouter } from 'react-router-dom';
import { ShopWebVite } from "./shop-web-vite";
    
export const ShopWebViteBasic = () => {
  return (
    <MemoryRouter>
      <ShopWebVite />
    </MemoryRouter>
  );
}