import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import ForWomen from "./Components/ForWomen";
import ForMen from "./Components/ForMen";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/for-women" component={ForWomen} />
          <Route exact path="/for-men" component={ForMen} />
          <Route exact path="/faq" component={Faqs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
