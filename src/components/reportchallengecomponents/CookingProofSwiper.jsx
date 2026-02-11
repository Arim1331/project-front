import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import * as S from "../../pages/reportandchallenge/style";

const CookingProofSwiper = ({
  title = "나의 요리 인증",
  items = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80",
      name: "초간단 소고기 토마토 스튜...",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80",
      name: "스윗 달콤한 콘앤치즈",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=1200&q=80",
      name: "꾸덕한 버섯 크림 리조또",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1604909053191-6f0f6f2a77ce?w=1200&q=80",
      name: "매콤 쫀득한 치즈 떡볶이",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=80",
      name: "따뜻하게 먹는 에그인헬...",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=80",
      name: "따뜻하게 먹는 에그인헬...",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=80",
      name: "따뜻하게 먹는 에그인헬...",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1200&q=80",
      name: "따뜻하게 먹는 에그인헬...",
      rating: 4.8,
      xp: 350,
      likes: 80,
    },
  ],
  onClickItem = () => {},
}) => {
  const uid = useId().replaceAll(":", "");
  const prevCls = `cook-prev-${uid}`;
  const nextCls = `cook-next-${uid}`;

  return (
    <S.CookSection>
      <S.CookInner>
        <S.CookHeader>
          <S.CookTitle>{title}</S.CookTitle>

          <S.CookNav>
            <S.CookNavBtn className={prevCls} type="button" aria-label="이전">
              ‹
            </S.CookNavBtn>
            <S.CookNavBtn className={nextCls} type="button" aria-label="다음">
              ›
            </S.CookNavBtn>
          </S.CookNav>
        </S.CookHeader>

        <S.CookSwiperWrap>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${prevCls}`,
              nextEl: `.${nextCls}`,
            }}
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 14 },
              520: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3.2, spaceBetween: 18 },
              1024: { slidesPerView: 4.2, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {items.map((it) => (
              <SwiperSlide key={it.id} className="cook-slide">
                <S.CookCardBtn type="button" onClick={() => onClickItem(it)}>
                  <S.CookThumb>
                    <S.CookImg src={it.image} alt={it.name} />

                    {/* hover overlay */}
                    <S.CookLikeOverlay className="cook-like">
                      <S.CookHeart aria-hidden="true">❤</S.CookHeart>
                      <S.CookLikeCount>{it.likes}</S.CookLikeCount>
                    </S.CookLikeOverlay>
                  </S.CookThumb>

                  <S.CookName title={it.name}>{it.name}</S.CookName>

                  <S.CookMetaRow>
                    <S.CookBadge $tone="rating">
                      <S.CookStar aria-hidden="true">★</S.CookStar>
                      {it.rating}
                    </S.CookBadge>
                    <S.CookBadge $tone="xp">XP {it.xp}</S.CookBadge>
                  </S.CookMetaRow>
                </S.CookCardBtn>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CookSwiperWrap>
      </S.CookInner>
    </S.CookSection>
  );
};

export default CookingProofSwiper;
