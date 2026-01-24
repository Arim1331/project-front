import React from "react";
import * as S from '../../pages/loginandjoin/style';

const PasswordComponent = () => {
  return (
    <div>
      <S.PasswordContainer>
        <p>비밀번호</p>
        <S.LoginInput type="text" placeholder="    비밀번호" />
      </S.PasswordContainer>
    </div>
  );
};

export default PasswordComponent;
