import React from "react";
import { Link } from "react-router-dom";
import FindIdComponent from "../../components/logincomponents/FindIdComponent";
import FindPwComponent from "../../components/logincomponents/FindPwComponent";
import QuickLoginComponent from "../../components/logincomponents/QuickLoginComponent";
import Login from "../../components/logincomponents/Login";
import S from "./style";

const LoginPage = () => {
  return (
    <S.Screen>
      <S.Title>로그인</S.Title>
      <S.Wrapper>
        <Login />

        <S.ServiceWrapper>
          <FindIdComponent />
          <p>|</p>
          <FindPwComponent />
          <p>|</p>
          <Link to={"/join"}>회원가입</Link>
        </S.ServiceWrapper>
        <QuickLoginComponent />
      </S.Wrapper>
    </S.Screen>
  );
};

export default LoginPage;
