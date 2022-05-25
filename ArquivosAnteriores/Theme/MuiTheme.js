import { createTheme } from '@mui/material/styles';

export const MuiTheme = createTheme({
    background: 'linear-gradient(45deg, #0a0c21 30%, #030518 90%)',
    backgroundFundo: 'linear-gradient(45deg, #000b42 30%, #000b42 90%)',
    textColor: '#fff',
    palette: {
      primary: {
        main: '#FF440000',
        contrastText: '#fff',
      },
      secondary: {
        main: '#11cb5f',
        contrastText: '#000',
      },
      vermelho: {
          main:'#cc0000',
          contrastText: '#fff',
      },
    },
  });

export const Tema2 = createTheme({
    background: 'linear-gradient(45deg, #ff7440 30%, #FF4400 90%)',
    background2: 'linear-gradient(45deg, #252525 30%, #464646 90%)',
    textColor: '#fff',
    palette: {
      primary: {
        main: '#FF4400',
        contrastText: '#fff',
      },
      secondary: {
        main:'#cc0000'
      },
      vermelho: {
        main: '#11cb5f',
      },
    },
  });