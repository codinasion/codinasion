// Source - https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/src/theme.ts

import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});

export default theme;