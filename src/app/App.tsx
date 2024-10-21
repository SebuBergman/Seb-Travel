import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppRouter } from "@config/routes";
import { theme } from "@config/styles";
import Loader from "@features/ui/Loader";
import { useAuthStateSubscription } from "@services/firebase";
import { persistor } from "@store/index";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorBoundary from "./config/routes/components/ErrorBoundary";

export default function App() {
  useAuthStateSubscription();

  return (
    <ErrorBoundary>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <SnackbarProvider>
                <AppRouter />
              </SnackbarProvider>
            </ThemeProvider>
          </LocalizationProvider>
        </BrowserRouter>
      </PersistGate>
    </ErrorBoundary>
  );
}
