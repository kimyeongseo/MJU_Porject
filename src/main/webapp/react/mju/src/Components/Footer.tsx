import styled from 'styled-components';

const FooterWrap = styled.div`
.footer {
    border-top: 1px dashed black;
    padding: 20px;
    color: #ccc;
    font: 7px 'arial';
    letter-spacing: 1px;
    margin: 100px;
    text-align: center;
}
`;

function Footer(){
    return (
        <FooterWrap>
         <footer id="footer">
        <div className="footer">
            <h2>상호명: H!CANADA 전화번호: 0100101010101</h2>
            <h2>이메일: HICANADA?!@gmail.com</h2>
        </div>
    </footer>
        </FooterWrap>
    );
}

export default Footer;