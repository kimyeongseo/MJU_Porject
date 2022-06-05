import { Link } from "react-router-dom";
import styled from 'styled-components';


const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MyPage(){
    return (
        <>
        MyPage
        <SLink to="mypage/email">이메일 수정</SLink>
        <SLink to="mypage/password">비밀번호 수정</SLink>
        <SLink to="mypage/withdrawal">회원 탈퇴 수정</SLink>
        <SLink to="mypage/myarticle"> 내가 쓴 글 보기</SLink>
        <SLink to="mypage/myrecommend"> 내가 추천한 글 보기</SLink>
        </>
    );
}

export default MyPage;