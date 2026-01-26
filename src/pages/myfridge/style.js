import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.PALLETE.background.white};
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // 가로 중앙
  gap: 24px;            // 요소 간 간격
  padding-top: 200px;
`

// 냉장고를 채워볼까요? 버튼
export const AddButton = styled.button`
  width: 298px;
  height: 56px;

  border: 1px solid #FF4D26;
  border-radius: 5px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.SEMIBOLD};

  color: #262626; 
  cursor: pointer;
`;

// 재료 카드 스타일
export const CardStyle = styled.div`
  height: 120px;        // 세로만 고정
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: solid #E9E9EC 1px;
`

export const CardTextStyle = styled.p`
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.PRETENDARD.LIGHT};
`

// 재료 카드 아이콘 스타일
export const IconStyle = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`


export const GridWrapperStyle = styled.div`
  width: 1420px;
  margin: 0 auto; // 가운데 정렬
`

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr); // 한 줄에 10개 고정
  gap: 16px;
  `