import React from 'react';
//style
import { GlobalStyles } from './GlobalStyle/GlobalStyle';
//packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components"
//components
import { Home } from './routes/Home';
import { Header } from './Components/Header/index'
import { Footer } from './Components/Footer/index'

function App() {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const theme = {
    //colors:
    primaryColor: "#F9522A",
    defaultColor: "#fff",

    //fonts:
    primaryFont: 'Roboto, sans-serif',
  }

  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router >
    )
  }


  return (
    <React.Fragment>

      <Router>

        <ThemeProvider theme={theme}>

          <GlobalStyles />

          <Header />

          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route component={AuthenticatedRoutes} />

          </Switch>

          <Footer />

        </ThemeProvider>

      </Router>


    </React.Fragment>
  );
}

export default App;