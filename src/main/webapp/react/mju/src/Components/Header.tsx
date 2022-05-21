import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  color: pink;
`;

function Header(){

    return (
        <Nav>
            <h1>
            Header
            </h1>
        </Nav>
    );
}

export default Header;