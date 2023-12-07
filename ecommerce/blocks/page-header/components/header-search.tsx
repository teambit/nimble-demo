import {
  Box, FormControl,
  IconButton,
  InputAdornment,
  NoSsr,
  OutlinedInput
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export function HeaderSearch() {
  return (
    <Box
      sx={{
        padding: '2px 4px',
        display: 'flex',
        flex: 1,
        maxWidth: '720px',
      }}
    >
      <FormControl fullWidth>
        <OutlinedInput
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '32px',
            },
          }}
          placeholder="Search by keyword or part number..."
          endAdornment={<InputAdornment position="end">
            <NoSsr>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </NoSsr>
          </InputAdornment>} />
      </FormControl>
    </Box>
  );
}
