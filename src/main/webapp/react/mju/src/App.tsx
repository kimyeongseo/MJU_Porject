import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Routes/Main";
import Search from "./Routes/Search";



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
