import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Main from "./pages/main";
import Other from "./pages/other";

function App() {
  return (
    <ChakraProvider>
      <Router>
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
