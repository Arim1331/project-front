import React from "react";
import { Link, Outlet } from "react-router-dom";
import * as S from "./style";
import IdComponent from "../../components/logincomponents/IdComponent";
import PasswordComponent from "../../components/logincomponents/PasswordComponent";
import KeepLoginCheckComponent from "../../components/logincomponents/KeepLoginCheckComponent";
import LoginButtonComponent from "../../components/logincomponents/LoginButtonComponent";
import FindIdComponent from "../../components/logincomponents/FindIdComponent";
import FindPwComponent from "../../components/logincomponents/FindPwComponent";
import QuickLoginComponent from "../../components/logincomponents/QuickLoginComponent";

const LoginPage = () => {
  return (
    <S.LoginScreen>
      <S.LoginContainer>
        <S.LoginH1>로그인</S.LoginH1>

        <IdComponent />
        <PasswordComponent />
        <KeepLoginCheckComponent />
        <LoginButtonComponent />

        <S.FindAndJoinContainer>
          <FindIdComponent />
          <p>|</p>
          <FindPwComponent />
          <p>|</p>
          <S.StyledJoinLink to={"/join"}>회원가입</S.StyledJoinLink>
        </S.FindAndJoinContainer>
        <QuickLoginComponent />
      </S.LoginContainer>
    </S.LoginScreen>
  );
};

export default LoginPage;
