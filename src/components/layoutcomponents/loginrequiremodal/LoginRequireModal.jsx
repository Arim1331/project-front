import React, { useEffect } from "react";
import * as S from "./style";

const LoginRequireModal = ({
  open,
  title = "로그인 후 이용하실 수 있습니다.",
  desc = "해당 기능은 로그인한 사용자만 사용할 수 있습니다.",
  confirmText = "로그인",
  cancelText = "취소",
  onConfirm,
  onClose,
}) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <S.Backdrop onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.IconWrapper>
          <S.Icon
            src={`${process.env.PUBLIC_URL}/assets/images/lock.svg`}
            alt="로그인 필요"
          />
        </S.IconWrapper>

        <S.Title>{title}</S.Title>
        <S.Desc>{desc}</S.Desc>

        <S.Divider />

        <S.ButtonRow>
          <S.CancelButton onClick={onClose}>
            {cancelText}
          </S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>
            {confirmText}
          </S.ConfirmButton>
        </S.ButtonRow>
      </S.Modal>
    </S.Backdrop>
  );
};

export default LoginRequireModal;
