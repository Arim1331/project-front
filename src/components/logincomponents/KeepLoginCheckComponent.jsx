import React from "react";
import * as S from "../../pages/loginandjoin/style";

const KeepLoginCheckComponent = () => {
  return (
    <div>
      <S.KeepLoginContainer>
        <S.KeepLoginCheck type="checkbox" name="로그인 상태 유지" id="" />
        <S.LabelText>로그인 상태 유지</S.LabelText>
      </S.KeepLoginContainer>
    </div>
  );
};

export default KeepLoginCheckComponent;
