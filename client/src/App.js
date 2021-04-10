import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Web from "./pages/WebServices";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Marketing from "./pages/Marketing";
import ThankYou from "./pages/ThankYou";

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
            <Route exact path="/marketing" component={Marketing}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/thankyou" component={ThankYou}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
