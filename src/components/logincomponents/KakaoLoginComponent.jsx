import React from "react";
import * as S from "../../pages/loginandjoin/style";

const KakaoLoginComponent = () => {
  // 팝업 창의 크기와 위치 설정
  const openKakaoLogin = () => {
    const width = 450;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // 카카오 로그인 API 주소 (실제 연동 시 백엔드나 카카오 설정에서 받은 URL 사용)
    const KAKAO_AUTH_URL = ``;

    window.open(
      KAKAO_AUTH_URL,
      "KakaoLoginPopup",
      `width=${width},height=${height},left=${left},top=${top},resizable=no`,
    );
  };

  return (
    <div>
      <S.QuickIconImg
        src="\assets\icons\kakao_button.png"
        onClick={openKakaoLogin}
        alt="카카오 로그인"
      />
    </div>
  );
};

export default KakaoLoginComponent;
