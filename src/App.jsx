import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "./app/Routes";
import Header from "./app/components/Header";
import Menu from "./app/components/Menu";
import Footer from "./app/components/Footer";
import Loading from "./app/components/Loading";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#212529",
    },
    secondary: {
      main: "#0056b3",
    },
  },
});

const queryClient = new QueryClient();

function App() {
  const user = useSelector((state) => state.user);

  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={() => <Loading />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Container className="py-4 px-lg-5">
              <Header />
              {user && <Menu />}
              <Routes />
              <Footer />
            </Container>
          </ThemeProvider>
        </BrowserRouter>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
