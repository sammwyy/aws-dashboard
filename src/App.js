import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Main from "./pages/main";
import Other from "./pages/other";

import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/other" exact>
            <Other />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
