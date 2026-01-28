import styled, { keyframes } from "styled-components";
import { FONT_STYLE } from "../../styles/common";

/* ===== MainHero Section ===== */

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;

  .swiper,
  .swiper-wrapper,
  .swiper-slide {
    height: 520px;
  }
`;

export const HeroSlide = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  display: flex;
  align-items: center;

  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;

  /* &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.35) 35%,
      rgba(0, 0, 0, 0) 70%
    );
  } */
`;

export const HeroContent = styled.div`
  position: relative;
  margin-left: 120px;
  max-width: 560px;
  color: ${({ theme }) => theme.PALLETE.white};
`;
export const HeroTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  line-height: 1.1;
  margin-bottom: 14px;
`;

export const HeroDesc = styled.p`
  ${FONT_STYLE.GIANTS.BODY2_REGULAR};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 22px;
`;

export const HeroButton = styled.button`
  ${FONT_STYLE.GIANTS.BODY3_MEDIUM};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  height: 40px;
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.RADIUS.sm};
  border: 1px solid rgba(255, 255, 255, 0.85);
  background: ${({ theme }) => theme.PALLETE.white};
  color: #222;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    font-size: 18px;
    transform: translateY(-1px);
  }

  &:hover {
    background: ${({ theme }) => theme.PALLETE.primary.main};
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
    color: ${({ theme }) => theme.PALLETE.white};

    span {
      color: ${({ theme }) => theme.PALLETE.white};
    }
  }
`;


/* ===== 컨트롤바 ===== */
export const HeroControlBar = styled.div`
  position: absolute;
  left: 120px;
  bottom: 28px;
  z-index: 30;

  display: inline-flex;
  align-items: center;
  gap: 16px;

  color: rgba(255, 255, 255, 0.9);
`;

export const ControlCount = styled.div`
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 1;
`;

/* 공통 버튼 */
export const ControlBtn = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.95);

  /* 오른쪽 > 버튼 (시안처럼) */
  &.next {
    font-size: 28px;
    line-height: 1;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
    transform: translateY(-1px);
  }

  /* 왼쪽 동그라미 버튼 (pause/play 토글) */
  &.pause {
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 9999px;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }

  /* pause 아이콘( || ) */
  &.pause::before,
  &.pause::after {
    content: "";
    position: absolute;
    top: 7px;
    width: 3px;
    height: 12px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 2px;
  }
  &.pause::before {
    left: 10px;
  }
  &.pause::after {
    left: 15px;
  }

  /* 재생 상태(is-play)면 pause 막대 숨기고 play 삼각형 표시 */
  &.pause.is-play::before,
  &.pause.is-play::after {
    display: none;
  }

  &.pause.is-play span {
    display: none;
  }

  &.pause.is-play {
    /* play 삼각형 */
  }
  &.pause.is-play::marker {
    content: "";
  }
  &.pause.is-play {
    /* pseudo로 play 만들기 */
  }
  &.pause.is-play::after {
    display: block;
    content: "";
    position: absolute;
    left: 11px;
    top: 8px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 9px solid rgba(255, 255, 255, 0.85);
    background: transparent;
  }
`;

export const HeroArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;

  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.95);
  font-size: 64px;
  line-height: 1;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);

  &.left {
    left: 40px;
  }

  &.right {
    right: 40px;
  }

  &:hover {
    color: #ffffff;
  }
`;

/* ===== MainHowItWorks Section ===== */

export const HowWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
  background: ${({ theme }) => theme.PALLETE.white};
  width: 1420px;
  margin: 0 auto;
`;

export const LeftArea = styled.div`
  flex: 1;
`;

export const RightArea = styled.div`
  flex: 1.3;
`;

export const SectionTitle = styled.h2`
  ${FONT_STYLE.GIANTS.H3_BOLD};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 30px;
  font-size: 26px;
  line-height: 1;
`;

export const SectionDesc = styled.p`
  ${FONT_STYLE.GIANTS.BODY2_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray700};
  /* font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD}; */
  line-height: 1.6;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 996px;
`;

export const StepCard = styled.div`
  background: ${({ theme })=> theme.PALLETE.gray[50]};
  border-radius: 16px;
  padding: 30px;
  display: flex;
`;

export const StepIcon = styled.div`
  font-size: 28px;
  margin: 0 5px 12px 0;
`;

const iconBounce = keyframes`
  0% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const WorksIconImg = styled.img`
  &:hover {
    animation: ${iconBounce} 0.5s ease;
  }
`;

export const StepTitle = styled.h4`
  ${FONT_STYLE.GIANTS.BODY1_BOLD};
  font-size: ${({ theme })=> theme.FONT_SIZE.h6};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.BOLD};
  margin-bottom: 8px;
`;

export const StepDesc = styled.p`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray600};
  font-size: ${({ theme })=> theme.FONT_SIZE.h7};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.MEDIUM};
  line-height: 1.5;
`;

export const StepPoint = styled.strong`
  ${FONT_STYLE.GIANTS.CAPTION_REGULAR};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  font-weight: ${({ theme })=> theme.FONT_WEIGHT.PRETENDARD.BOLD};
  line-height: 1.5;
`;

export const StepTextArea = styled.div`
`;

