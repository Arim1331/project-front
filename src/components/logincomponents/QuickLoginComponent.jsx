import React from "react";
import * as S from '../../pages/loginandjoin/style';
import KakaoLoginComponent from "./KakaoLoginComponent";

const QuickLoginComponent = () => {



  return (
    <S.QuickContainer>
      <S.StyledLoginFieldset>
        <S.LoginLegend align="center">&nbsp;간편 로그인&nbsp;</S.LoginLegend>
        <S.QuickIconBox>
          <KakaoLoginComponent/>
          <S.QuickIconImg 
            src="\assets\icons\naver_button.png"
          />
          <S.QuickIconImg
            src="\assets\icons\apple_button.png"
          />
        </S.QuickIconBox>
      </S.StyledLoginFieldset>
    </S.QuickContainer>
  );
};

export default QuickLoginComponent;
