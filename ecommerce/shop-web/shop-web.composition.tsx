import { MemoryRouter } from 'react-router-dom';
import { ShopWeb } from "./shop-web";
    
export const ShopWebBasic = () => {
  return (
    <MemoryRouter>
      <ShopWeb />
    </MemoryRouter>
  );
}