import './styles/style.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState, createContext } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/Footer';
export const NavContext = createContext();
const App = () => {
    const [ showNav, setShowNav ] = useState(false);
    const handleLinkClick = (e) => {
        setShowNav(false);
        e.currentTarget.blur();
    }
    return (
        <div className={`app ${showNav && "nav-open"}`}>
            <Router>
                <NavContext.Provider value={{showNav, setShowNav, handleLinkClick}}>
                    <Header />
                </NavContext.Provider>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </main>
                <Route path="/about">
                    <Footer />
                </Route>
            </Router>
        </div>
  );
}

export default App;
