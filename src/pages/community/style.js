import { styled } from "styled-components";
import { flexBetweenRow, flexCenter } from "../../styles/common";
import { FONT_STYLE } from "../../styles/common";

// 페이지 전체
export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.PALLETE.background.white};
`

// 컨텐츠 컨테이너
export const Container = styled.div`
  max-width: 1420px; // 1920 기준 가운데 본문 폭
  margin: 0 auto; 
  padding: 24px 0 80px;

  @media (max-width: 1920px) {
    width: 100%;
    padding: 24px 20px 80px;
  } // 1920보다 화면이 작으면 생기는 가로 스크롤 방지
`

// **헤더 영역**
export const HeaderSection = styled.section`
  width: 100%;
  margin-top: 68px;
  padding-bottom: 24px;

  /* 좌우 여백 추가 */
  padding-left: 130px;
  padding-right: 130px;

`
// 타이틀
export const Title = styled.h6`
  ${FONT_STYLE.GIANTS.H6_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 16px;
`
// 검색줄
export const SearchRow = styled.div`
  ${flexBetweenRow};
  gap: 20px;
`
// 검색 인풋
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  /* 아이콘 자리 확보 */
  padding: 0 44px 0 16px;

  border-radius: 5px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.PALLETE.gray[100]};

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};

  &::placeholder {
    color: ${({ theme }) => theme.PALLETE.gray[800]};
  };

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.PALLETE.primary.main};
    background-color: ${({ theme }) => theme.PALLETE.background.white};
  };
  
`

// 검색 input + 아이콘 감싸는 레퍼
export const SearchWrap = styled.div`
  position: relative;
  width: 1028px;
  height: 40px;
`
export const SearchButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`

// 검색 아이콘
export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
`

// 필터 버튼
export const FilterButton = styled.button`
  height: 40px;
  width: 106px;

  ${flexCenter}
  gap: 6px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[300]};
  background-color: ${({ theme }) => theme.PALLETE.background.white};

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme, $active }) => $active ? theme.PALLETE.primary.main : theme.PALLETE.mainblack};
  font-weight: ${({ $active }) => $active? 600 : 400};
 
  cursor: pointer;
   
`

// 필터 아이콘
export const FilterIcon = styled.img`
  width: 23px;
  height: 23px;
`
// 정렬 드랍다운 감싸는 래퍼 (버튼 기준으로 드랍다운 위치 잡기)
export const DropdownWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

// 드랍다운 메뉴 박스 (피그마: width 115px / height 79px)
export const DropdownMenu = styled.div`
  position: absolute;
  top: 46px;
  right: 0;

  width: 115px;
  height: 79px;

  background: ${({ theme }) => theme.PALLETE.background.white};
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[300]};
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  gap: 4px;

  z-index: 50;
`

// 드랍다운 항목 
export const DropdownItem = styled.button`
  width: 100%;
  height: 32px;

  ${flexCenter}
  justify-content: flex-start;
  
  padding-top: 10px;
  padding-left: 14px;

  border: none;
  background: transparent;
  border-radius: 5px;

  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  cursor: pointer;

  color: ${({ theme }) => theme.PALLETE.mainblack};
  transition: color 0.12s ease, font-weight 0.12s ease;

  &:hover {
    color: ${({ theme }) => theme.PALLETE.primary.main};
    font-weight: 700;
  }
`

// 섹션 구분선
export const FullDivider = styled.div`
  width: 100%; 
  height: 1px;
  margin: 30px 0 0; // 피그마상에선 70px이지만 실제 구현시 공간 낭비가 심해 30px로 줄임
  background-color: ${({ theme }) => theme.PALLETE.gray[100]};
`

// **트랜딩 케러셀 영역**
export const CarouselSection = styled.section`
  width: 100%;
  margin-top: 68px;
  padding-bottom: 24px;
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h4` 
// 피그마상 폰트사이즈 26px이지만 theme에 공용 사이즈 없어서 h4로 설정
  ${FONT_STYLE.GIANTS.H4_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  margin-bottom: 18px;
  
`

export const SectionDesc = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
  margin-bottom: 34px;

`
// 캐러셀 본문(버튼 + 뷰포트)
export const CaroselBody = styled.div`
  position: relative;
  width: 100%;
  padding: 0 130px;
`

// 잘라내는 창
export const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
`

// 카드들이 한 줄로 가로 나열되는 트랙
export const CarouselTrack = styled.div`
  display: flex;
  gap: 40px;

  /* 나중에 슬라이드 붙일 때 */
  /* transition: transform 0.25s ease; */
`

// 좌/우 네비 버튼(뼈대)
export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ $direction }) => ($direction === "prev" ? "left: -24px;" : "right: -24px;")}

   width: 50px; // 피그마상 60px
   height: 50px;
   border-radius: 50%;

    z-index: 10;
    
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[300]};
  background: ${({ theme }) => theme.PALLETE.background.white};
  cursor: pointer;

  /* display: inline-flex;
  align-items: center;
  justify-content: center; */
`

// 카드 뼈대
export const CarouselCard = styled.button`
  min-width: 325px;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray[200]};
  border-radius: 10px;
  background: ${({ theme }) => theme.PALLETE.background.white};
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  text-align: left;
`

// 이미지 영역 placeholder
export const CardImageArea = styled.img`
  height: 161px;
  width: 100%;
  object-fit: cover;
  display: block;

`

// 내용 영역 placeholder
export const CardContentArea = styled.div`
  padding: 24px;
`

export const CardTitleRow = styled.div`
  ${flexBetweenRow};
  align-items: center;
  margin-bottom: 24px;

`
export const CardTitle = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};

`

export const CardLikeArea = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`
export const HeartIcon = styled.span`
  width: 19px;
  height: 15px;
  display: inline-block;

`

export const LikeCount = styled.span`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
`

export const CardMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 15px;
`
export const UserNickName = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  // 세미볼드로 폰트웨이트 설정

`
export const BadgeChipWrap = styled.div`
  display: flex;
  gap: 17px;
`
export const BadgeChipIcon = styled.img`
  width: 16px;
  height: 16px;
`

export const BadgeChip = styled.span`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  padding: 9px;
  border-radius: 6px;
  background: ${({ theme }) => theme.PALLETE.primary.sub};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  // 세미볼드로 폰트웨이트 설정
`
export const BadgeChip2 = styled.span`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  padding: 9px;
  border-radius: 6px;
  background: #DFF7F1; // theme에 지정컬러 없음
  color: ${({ theme }) => theme.PALLETE.secondary};
`

export const CardDateText = styled.span`
  ${FONT_STYLE.PRETENDARD.H8_REGULAR};
  color: ${({ theme }) => theme.PALLETE.gray[700]};
`
export const CardDesc = styled.p`
  ${FONT_STYLE.PRETENDARD.H7_REGULAR};
  color: ${({ theme }) => theme.PALLETE.mainblack};
  line-height: 24px;

   /* 3줄까지만 보이게(원하면) */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden; 
`

// export const BadgeChip = styled.