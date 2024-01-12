import { Box, Typography } from '@mui/material';

export type CheckoutNavMenuContentProps = {};

export function CheckoutNavMenuContent() {
  const cartItems = []; // Simulate cart items

  return (
    <Box>
      {cartItems.length === 0 ? (
        <Box
          sx={{
            p: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="subtitle1" component="div">
            Your cart is empty
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              pt: 2,
            }}
          >
            <span role="img" aria-label="Cart">
              🛒
            </span>{' '}
            Add some products!
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}
