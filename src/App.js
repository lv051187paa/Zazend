import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostDetails from "./components/PostDetails";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
