import { createTheme } from '@mui/material';
import defaultTheme from 'tailwindcss/defaultTheme'

const theme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Sans Thai',
      ...defaultTheme.fontFamily.sans
    ].join(','),
  },
});

export default theme;