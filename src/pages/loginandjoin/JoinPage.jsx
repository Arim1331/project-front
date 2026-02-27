import React from "react";
import JoinComponent from "../../components/logincomponents/JoinComponent";
import { Link } from "react-router-dom";
import S from "./style";

const JoinPage = () => {
  return (
    <S.Screen>
      <S.Title className="Title">회원가입</S.Title>
      <S.Wrapper className="Wrapper">
        <img src="\assets\images\signup_img.png" alt="페이지 광고 배너" />
        <JoinComponent />

        <div className="ToLogin">
          <span>이미 회원이신가요?</span>
          <Link to={"/login"}>로그인</Link>
        </div>
      </S.Wrapper>
    </S.Screen>
  );
};

export default JoinPage;
