import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Main from "./pages/main";
import Other from "./pages/other";

import Navbar from "./components/navbar/navbar";
import PageBreadcrumb from "./components/breadcrumb/breadcrumb";
import Sidebar from "./components/sidebar/sidebar";

import "./assets/sass/mainStyle.sass";
import { useState } from "react";

function App() {
  const [ sidebarContent, setSidebarContent ] = useState(null);

  const props = {
    setSidebarContent
  }

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <div className="app">
          <div className="wrapper">
            { sidebarContent && <Sidebar content={sidebarContent} /> }
            <div className="container">
              <PageBreadcrumb />
              <div className="view">
                <Switch>
                  <Route path="/this/is/an/example/page" exact>
                    <Main {...props} />
                  </Route>

                  <Route path="/other" exact>
                    <Other {...props} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
