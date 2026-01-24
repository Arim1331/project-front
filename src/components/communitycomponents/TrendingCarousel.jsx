import React, { useMemo, useState } from "react";
import * as S from "../../pages/community/style";

const TrendingCarousel = () => {
  // 더미 데이터(형태만) ㅡ 나중에 API로 교체
  const items = useMemo(
    () => Array.from({ length: 8 }, (_, i) => ({ id: i + 1 })),
    [],
  );

  // 뼈대용 인덱스 (나중에 translateX 계산에 사용)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    // TODO: 마지막 인덱스 계산은 카드 개수/보이는 개수에 맞춰 조정
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <S.CarouselSection>
      <S.SectionHeader>
        <S.SectionTitle>인기 급상승! 연말 필수 요리 함께 해요</S.SectionTitle>
        <S.SectionDesc>연말 모임 다양한 미식 메뉴 도전해 보세요</S.SectionDesc>
      </S.SectionHeader>

      <S.CaroselBody>
        {/* 왼쪽 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="이전"
          $direction="prev"
          onClick={handlePrev}
        ></S.CarouselNavButton>

        {/* 슬라이더 영역 */}
        <S.CarouselViewport>
          {/* 여기서 currentIndex로 translateX 붙이면 “진짜 슬라이드”가 됨 */}
          <S.CarouselTrack
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {items.map((item) => (
              <S.CarouselCard key={item.id} type="button">
                <S.CardImageArea
                  src="/assets/images/oatmeal.png"
                  alt="딸기오트밀 이미지"
                />
                <S.CardContentArea>
                  <S.CardTitleRow>
                    <S.CardTitle>김치찌개</S.CardTitle>
                    <S.CardLikeArea>
                      <S.HeartIcon />
                      <S.LikeCount>24</S.LikeCount>
                    </S.CardLikeArea>
                  </S.CardTitleRow>

                  <S.CardMetaRow>
                    <S.UserNickName>굴곡밥러버</S.UserNickName>

                    <S.BadgeChipWrap>
                      <S.BadgeChipIcon src="/assets/icons/star.png" alt="별 아이콘" />

                      <S.BadgeChip>Lv.4</S.BadgeChip>
                    </S.BadgeChipWrap>
                    <S.BadgeChip2>XP 150</S.BadgeChip2>
                    <S.CardDateText>3일 전</S.CardDateText>
                  </S.CardMetaRow>

                  <S.CardDesc>
                    매생이 향이 진해서 국을 뜨자마자 바다 향이 확 올라와요. 굴고
                    비린 맛 하나 없이 신선해서 씹을 때마다 탱글한 식감이
                    느껴졌어요.
                  </S.CardDesc>
                </S.CardContentArea>
              </S.CarouselCard>
            ))}
          </S.CarouselTrack>
        </S.CarouselViewport>

        {/* 오른쪽 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="다음"
          $direction="next"
          onClick={handleNext}
        ></S.CarouselNavButton>
      </S.CaroselBody>
    </S.CarouselSection>
  );
};

export default TrendingCarousel;
