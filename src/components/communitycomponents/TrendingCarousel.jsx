import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import * as S from "../../pages/community/style";
import PostCard from "./PostCard";

// 슬라이드 전용

const GAP = 22; // 카드 사이 간격(피그마상 40px, 넘 넓어보여서 줄임)
const VISIBLE = 4; // 화면에 보이는 카드 수(사진 4장)

const TrendingCarousel = () => {
  // 더미 데이터(형태만) ㅡ 나중에 API로 교체
  const items = useMemo(
    () => Array.from({ length: 8 }, (_, i) => ({ id: i + 1 })),
    [],
  );

  const viewportRef = useRef(null);

  // 뼈대용 인덱스 (나중에 translateX 계산에 사용)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardW, setCardW] = useState(0);

  // ✅ 뷰포트 기준으로 카드 폭 계산 (4개 딱 맞게)
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const viewportWidth = el.getBoundingClientRect().width;
      const width = (viewportWidth - GAP * (VISIBLE - 1)) / VISIBLE;
      setCardW(width);
    };

    update();

    // 반응형 대비
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(items.length - VISIBLE, 0);
  const step = cardW + GAP;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    // TODO: 마지막 인덱스 계산은 카드 개수/보이는 개수에 맞춰 조정
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
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
          disabled={currentIndex === 0}
        />

        {/* 슬라이더 영역 */}
        <S.CarouselViewport ref={viewportRef}>
          {/* 여기서 currentIndex로 translateX 붙이면 “진짜 슬라이드”가 됨 */}
          <S.CarouselTrack
            style={{ transform: `translateX(-${currentIndex * step}px)` }}
          >
            {items.map((item) => (
              <PostCard
                key={item.id}
                item={item}
                w={cardW}
                onClick={() => console.log("post click", item.id)}
                />
            ))}
          </S.CarouselTrack>
        </S.CarouselViewport>

        {/* 오른쪽 버튼 */}
        <S.CarouselNavButton
          type="button"
          aria-label="다음"
          $direction="next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        />
      </S.CaroselBody>
    </S.CarouselSection>
  );
};

export default TrendingCarousel;
