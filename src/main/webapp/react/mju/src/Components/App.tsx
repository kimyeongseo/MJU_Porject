import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "../Routes/Main";
import MyPage from "../Routes/MyPage/MyPage";
import Nav from "./Nav";
import News from "../Routes/News";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Withdrawal from "../Routes/MyPage/Withdrawal";
import Email from "../Routes/MyPage/Email";
import Password from "../Routes/MyPage/Password";
import MyArticle from "../Routes/MyPage/MyArticle";
import MyRecommend from "../Routes/MyPage/MyRecommend";



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
        <Route path="/mypage/email" exact component={Email} >
          <Email />
        </Route>
        <Route path="/mypage/password" exact component={Password} >
          <Password />
        </Route>
        <Route path="/mypage/withdrawal" exact component={Withdrawal} >
          <Withdrawal />
        </Route>
        <Route path="/mypage/myarticle" exact component={MyArticle} >
          <MyArticle />
        </Route>
        <Route path="/mypage/myrecommend" exact component={MyRecommend} >
          <MyRecommend />
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
