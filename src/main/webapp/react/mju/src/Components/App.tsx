import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "../Routes/Main";
import MyPage from "../Routes/MyPage";
import Nav from "./Nav";
import News from "../Routes/News";
import Login from "../Routes/Login";
import Register from "../Routes/Register";



function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
      <Route path="/login" exact component={Login}>
          <Login />
        </Route>
        <Route path="/register" exact component={Register}>
          <Register />
        </Route>
        <Route path="/" exact component={Main}>
          <Main />
        </Route>
        <Route path="/mypage" exact component={MyPage}>
          <MyPage />
        </Route>
        <Route path="/news" exact component={News}>
          <News />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
