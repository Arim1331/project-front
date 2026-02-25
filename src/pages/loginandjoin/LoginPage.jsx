import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./style";
import IdComponent from "../../components/logincomponents/IdComponent";
import PasswordComponent from "../../components/logincomponents/PasswordComponent";
import KeepLoginCheckComponent from "../../components/logincomponents/KeepLoginCheckComponent";
import LoginButtonComponent from "../../components/logincomponents/LoginButtonComponent";
import FindIdComponent from "../../components/logincomponents/FindIdComponent";
import FindPwComponent from "../../components/logincomponents/FindPwComponent";
import QuickLoginComponent from "../../components/logincomponents/QuickLoginComponent";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { setIsAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ mode: "onChange" });

  //[] 바깥 ^는 문자열 처음을 의미
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const login = async (member) => {
    const response = await fetch("http://localhost:10000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(member),
    });

    return response.json();
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      // 로그인 성공
      setIsAuthenticated(true);
      navigate("/", { replace: true });
      console.log(res);
    },
    onError: (error) => {
      console.log(error);
      setIsAuthenticated(false);
    },
  });

  const onSubmit = (formData) => {
    // 데이터 요청(react query)
    loginMutation.mutate(formData);
  };

  return (
    <S.LoginScreen>
      <S.LoginContainer>
        <S.LoginH1>로그인</S.LoginH1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>이메일</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              {...register("memberEmail", {
                required: true,
                pattern: {
                  value: emailRegex,
                },
              })}
            />
            {errors?.memberEmail?.type === "required" && (
              <p>이메일을 입력해주세요</p>
            )}
            {errors?.memberEmail?.type === "pattern" && (
              <p>이메일 양식에 맞게 입력해주세요</p>
            )}
          </label>

          <label>
            <p>비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              {...register("memberPassword", {
                required: true,
                pattern: {
                  value: passwordRegex,
                },
              })}
            />
            {errors?.memberPassword?.type === "required" && (
              <p>비밀번호를 입력해주세요</p>
            )}
            {errors?.memberPassword?.type === "pattern" && (
              <p>
                소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
              </p>
            )}
          </label>

          <button disabled={isSubmitting}>로그인</button>
        </form>

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
