import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  HeroWrapper,
  HeroSlide,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroButton,
  HeroControlBar,
  ControlBtn,
  ControlCount,
  HeroArrowButton,
} from "../../pages/main/style";

const TOTAL_SLIDES = 3;

const slides = [
  { id: 1, title: "냉장고를 비우는\n가장 재밌는 방법", desc: "냉장고 속 재료만 넣으면\n그 재료로 바로 만들 수 있는 요리를 추천해주고\n요리를 완성하면 레벨업되는 요리 게임 플랫폼입니다.", cta: "내 냉장고를 채워볼까요?", bg: "/images/main/hero-1.jpg" },
  { id: 2, title: "냉장고 재료로\n바로 만드는 요리 추천", desc: "냉장고 속 재료를 입력하면\n만들 수 있는 요리를 우선순위로 추천해요.\n재료 낭비 없이 맛있게 즐겨요!", cta: "추천 요리 보러가기", bg: "/images/main/hero-2.jpg" },
  { id: 3, title: "요리 인증하고\n레벨업 도전!", desc: "요리를 만들고 사진으로 인증하면\nXP가 쌓이고 뱃지와 레벨이 올라가요.\n게임처럼 즐기며 성장해요!", cta: "인증하러 가기", bg: "/images/main/hero-3.jpg" },
];

const MainHero = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [current, setCurrent] = useState(1);

  const handleToggleAutoplay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (isPaused) {
      swiper.autoplay?.start();
      setIsPaused(false);
    } else {
      swiper.autoplay?.stop();
      setIsPaused(true);
    }
  };

  const handleNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // "마지막이면 첫번째로" 확실하게
    const isLast = swiper.realIndex === TOTAL_SLIDES - 1;
    if (isLast) {
      swiper.slideToLoop(0); // 첫 슬라이드(0번)로
    } else {
      swiper.slideNext();
    }
  };

  return (
    <HeroWrapper>
      {/* 시안처럼 양쪽 큰 화살표 */}
      <HeroArrowButton ref={prevRef} className="left" aria-label="이전 슬라이드">
        ‹
      </HeroArrowButton>
      <HeroArrowButton ref={nextRef} className="right" aria-label="다음 슬라이드">
        ›
      </HeroArrowButton>

      {/* 하단 컨트롤바 */}
      <HeroControlBar>
        <ControlBtn
          type="button"
          className={`pause ${isPaused ? "is-play" : ""}`}
          aria-label={isPaused ? "자동 재생" : "자동 정지"}
          onClick={handleToggleAutoplay}
        />
        <ControlCount>
          {current} / {TOTAL_SLIDES}
        </ControlCount>
        <ControlBtn
          type="button"
          className="next"
          aria-label="다음 슬라이드"
          onClick={handleNext}
        >
          ›
        </ControlBtn>
      </HeroControlBar>

      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        slidesPerView={1}
        loop
        loopAdditionalSlides={2}
        speed={650}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // ref가 init 시점에 null일 수 있어 여기서 연결
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setCurrent(swiper.realIndex + 1);
        }}
        onSlideChange={(swiper) => {
          setCurrent(swiper.realIndex + 1);
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <HeroSlide $bg={s.bg}>
              <HeroContent>
                <HeroTitle>
                  {s.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </HeroTitle>

                <HeroDesc>
                  {s.desc.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </HeroDesc>

                <HeroButton>
                  {s.cta}
                  <span aria-hidden="true">›</span>
                </HeroButton>
              </HeroContent>
            </HeroSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroWrapper>
  );
};

export default MainHero;
