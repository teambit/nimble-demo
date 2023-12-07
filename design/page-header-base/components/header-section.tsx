import { Box, BoxProps } from '@mui/material';


export type HeaderSectionProps = {} & BoxProps;

export function HeaderSection({ sx: innerSx, ...props }: HeaderSectionProps) {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...innerSx,
      }} />
  );
}
