import { Box, BoxProps } from '@mui/material';

export type HeaderRowProps = {} & BoxProps;

export function HeaderRow({ sx, ...rest }: HeaderRowProps) {
  const styles = {
    display: 'flex',
    px: 2,
    py: 1,
    alignContent: 'center',
  } as const;

  return (
    <Box
      sx={{
        ...sx,
        ...styles,
      }}
      {...rest}
    />
  );
}
