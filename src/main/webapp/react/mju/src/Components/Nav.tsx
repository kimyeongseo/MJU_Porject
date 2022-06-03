import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';

const NavWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color:  #fcfcfc;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (

    <NavWrap>
        <List>
            <Item>
                <SLink to="/">Main</SLink>
            </Item>
            <Item>
                <SLink to="/news">News</SLink>
            </Item>
            <Item>
                <SLink to="/mypage">MyPage</SLink>
            </Item>
        </List>
    </NavWrap>
        ));