import AppRouter from '@config/ruotes/AppRouter';
import { theme } from "@config/styles";
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App
