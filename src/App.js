import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Main from "./pages/main";
import Other from "./pages/other";

import Navbar from "./components/navbar/navbar";
import PageBreadcrumb from "./components/breadcrumb/breadcrumb";

import "./assets/sass/mainStyle.sass";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <div className="app">
          <PageBreadcrumb />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path="/other" exact>
              <Other />
            </Route>
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
