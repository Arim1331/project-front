import React from "react";
import { Link } from "react-router-dom";
import S from "./style";

const QuickLoginComponent = () => {
  return (
    <>
      <S.Fieldset>
        <legend align="center">&nbsp;간편 로그인&nbsp;</legend>
        <S.Link to={"http://localhost:10000/auth/kakao"}>
          <img src="\assets\icons\kakao_button.png" />
        </S.Link>
        <S.Link to={"http://localhost:10000/auth/naver"}>
          <img src="\assets\icons\naver_button.png" />
        </S.Link>
        <S.Link to={"http://localhost:10000/auth/google"}>
          <img src="\assets\icons\google_button.png" />
        </S.Link>
      </S.Fieldset>
    </>
  );
};

export default QuickLoginComponent;
