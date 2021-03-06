// Import Pages
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurSuggestion from "./pages/OurSuggestions";
import Jitsu from "./pages/Jitsu";
import Page404 from "./pages/Page404";
// Animation

import { AnimatePresence } from "framer-motion";
// Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/suggestion" exact>
            <OurSuggestion />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
          <Route path="/jitsu" exact>
            <Jitsu />
          </Route>
          <Route path="*" component={Page404}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
