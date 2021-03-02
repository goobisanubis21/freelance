import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Web from "./pages/WebServices";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/web-services" component={Web}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
