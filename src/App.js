// Import Pages
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import OurSuggestion from './pages/OurSuggestions'
import AnimeDetail from './pages/AnimeDetails'

// Router
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/suggestion" exact>
          <OurSuggestion />
        </Route>
        <Route path="/suggestion/:id">
          <AnimeDetail />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
