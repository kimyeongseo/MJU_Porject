import styled from 'styled-components';

const HeaderWrap = styled.div`
a {color: #222; text-decoration: none;}
a:hover {color: whitesmoke;}
margin-bottom: 50px;

/* 레이아웃 */
#header {background-color: white;}

/* 헤더 */
.header .header_menu {
    text-align: right;
}
.header .header_menu a {
    padding: 8px 30px 6px 10px;
    display: inline-block;
    transition: color 0.3s ease;
    font: 10px 'Arial';
}
.header .header_menu a:hover {
    color: whitesmoke;
}

.header_logo h1 {
    font: bold 40px 'arial';
    padding-top: 14px;
    margin: 0 0 0 20px;
    letter-spacing: 2px;
    transition: color 0.3s ease;
    text-align: center;
}
.header_logo p {
    margin: 0 0 0 20px;
    transition: color 0.3s ease;
    text-align: center;
}

.header_gnb ul {
    text-align: center;
    margin-top: 20px;
}

.header_gnb ul li {
    display: inline-block;
}

.header_gnb ul li a {
    transition: color 0.3s ease;
    display: block;
    font: 13px 'arial';
    margin: 0px 16px;
    letter-spacing: 1px;
}

/* 동그라밍 */
.header .header_icon {text-align: center; margin-top: 40px; padding-bottom: 45px;}
.header .header_icon li {display: inline; margin: 0 2px;}
.header .header_icon li a {
    position: relative; 
    background-color: whitesmoke; 
    border-radius: 50%; 
    width: 60px; height: 60px; 
    color: black;  display: 
    inline-block; 
    font-size: 35px; 
    line-height: 60px; 
    transition: all 0.3s ease;
}
.header .header_icon li a span {
    position: absolute; 
    left: 50%; top: -40px; 
    transform: translateX(-50%); 
    font-size: 12px; 
    line-height: 1.6; 
    background: white; 
    padding: 3px 9px; 
    border-radius: 6px 0; 
    opacity: 0; 
    transition: all 0.3s ease;
}
.header .header_icon li a span:before {
    content:''; 
    position: absolute; 
    left: 50%; bottom: -5px; 
    margin-left: -5px; 
    border-top: 5px solid white; 
    border-left: 5px solid transparent; 
    border-right: 5px solid transparent;
}
.header .header_icon li a:hover span {
    opacity: 1; 
    top: -33px;
}
.header .header_icon li a:hover {
    box-shadow: 
        0 0 0 3px rgba(75,154,191,0.9) inset, 
        0 0 0 100px rgba(0,0,0,0.1) inset;
}
`;

function Header() {

    return (
        <HeaderWrap>
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="header">
                            <div className="header_menu">
                                LogOut
                            </div>
                            <div className="header_logo">
                                    <h1>H!CANADA</h1>
                                    <p>KOREAN COMMUNITY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </HeaderWrap >
    );
}

export default Header;