import React from "react";
import {
  HowWrapper,
  LeftArea,
  RightArea,
  SectionTitle,
  SectionDesc,
  CardGrid,
  StepCard,
  StepTextArea,
  StepTitle,
  StepDesc,
  StepIcon,
  WorksIconImg,
  StepPoint,

} from "../../pages/main/style";

const MainHowItWorks = () => {
  return (
    <HowWrapper>
      {/* 왼쪽 설명 영역 */}
      <LeftArea>
        <SectionTitle>프리고고 하는 방법</SectionTitle>
        <SectionDesc>
          냉장고 속 재료를 효율적으로 관리하고,<br />
          맞춤 요리 추천을 받으며 레벨업하는 즐거움을 경험해보세요.
        </SectionDesc>
      </LeftArea>

      {/* 오른쪽 카드 영역 */}
      <RightArea>
        <CardGrid>
          <StepCard>
            <StepIcon>
              <WorksIconImg 
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work01.png`}
                alt="재료 담기"
              />
            </StepIcon>
            <StepTextArea>
              <StepTitle>1. 재료 담기</StepTitle>
              <StepDesc>
                <StepPoint>집에 있는 재료</StepPoint>를 담아보세요.<br />
                프리고고가 <StepPoint>자동으로 정리</StepPoint>해드려요.
              </StepDesc>
            </StepTextArea>
          </StepCard>

          <StepCard>
            <StepIcon>
              <WorksIconImg 
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work02.png`}
                alt="요리 추천"
              />
            </StepIcon>
            <StepTextArea>
              <StepTitle>2. 요리 추천</StepTitle>
              <StepDesc>
                <StepPoint>입력한 재료로 만들 수 있는 요리</StepPoint>를<br />
                가장 먼저 추천해드려요.
              </StepDesc>
            </StepTextArea>
          </StepCard>

          <StepCard>
            <StepIcon>
              <WorksIconImg 
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work03.png`}
                alt="요리 인증"
              />
            </StepIcon>
            <StepTextArea>
              <StepTitle>3. 요리 인증</StepTitle>
              <StepDesc>
                요리를 만들고 사진으로 인증하면<br />
                <StepPoint>XP가 쌓여 성장</StepPoint>할 수 있어요.
              </StepDesc>
            </StepTextArea>
          </StepCard>

          <StepCard>
            <StepIcon>
              <WorksIconImg 
                src={`${process.env.PUBLIC_URL}/assets/images/main/ico_work04.png`}
                alt="레벨 및 뱃지 획득"
              />
            </StepIcon>
            <StepTextArea>
              <StepTitle>4. 레벨 및 뱃지 획득</StepTitle>
              <StepDesc>
                재료를 소비하면 냉장고가 업데이트되고<br />
                당신의 <StepPoint>요리 레벨이 상승</StepPoint>합니다!
              </StepDesc>
            </StepTextArea>
          </StepCard>
        </CardGrid>
      </RightArea>
    </HowWrapper>
  );
};

export default MainHowItWorks;
