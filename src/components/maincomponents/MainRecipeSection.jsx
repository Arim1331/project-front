import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";

import {
  RecipeWrapper,
  RecipeInner,
  RecipeTitle,
  RecipeTabs,
  RecipeTab,
  RecipePanel,
  RecipeCard,
  RecipeThumb,
  RecipeBody,
  RecipeName,
  BadgeRow,
  Badge,
  MetaRow,
  MetaChip,
} from "../../pages/main/style";

const TABS = [
  { key: "all", label: "전체" },
  { key: "kr", label: "한식" },
  { key: "ws", label: "양식" },
  { key: "ch", label: "중식" },
  { key: "salad", label: "샐러드" },
];

const BASE_IMG_URL = process.env.PUBLIC_URL + "/assets/images/main";

// 임시 데이터 (recipeId가 라우팅(/recipe/:id)에 사용됨)
const DATA = {
  kr: [
    { id: "kr-1", recipeId: 11, title: "몽글몽글 얼큰 순두부찌개", img: `${BASE_IMG_URL}/r_tab2_slide01.jpg`, rating: 4.9, xp: 420, time: "25분", ing: "18개" },
    { id: "kr-2", recipeId: 12, title: "바싹하게 구운 불고기 덮밥", img: `${BASE_IMG_URL}/r_tab2_slide02.jpg`, rating: 4.8, xp: 350, time: "30분", ing: "7개" },
    { id: "kr-3", recipeId: 13, title: "반숙 계란후라이를 얹은 김치볶음밥", img: `${BASE_IMG_URL}/r_tab2_slide03.jpg`, rating: 4.7, xp: 280, time: "15분", ing: "16개" },
  ],
  ws: [
    { id: "ws-1", recipeId: 21, title: "초간단한 한우 달달 토마토 스튜", img: `${BASE_IMG_URL}/r_tab3_slide01.jpg`, rating: 4.8, xp: 360, time: "25분", ing: "6개" },
    { id: "ws-2", recipeId: 22, title: "스윗 달콤한 콘앤치즈", img: `${BASE_IMG_URL}/r_tab3_slide02.jpg`, rating: 4.9, xp: 430, time: "20분", ing: "17개" },
    { id: "ws-3", recipeId: 23, title: "꾸덕한 버섯 크림 리조또", img: `${BASE_IMG_URL}/r_tab3_slide03.jpg`, rating: 4.6, xp: 240, time: "10분", ing: "5개" },
    { id: "ws-3", recipeId: 24, title: "매콤 쫀득한 치즈 떡볶이", img: `${BASE_IMG_URL}/r_tab3_slide04.jpg`, rating: 4.6, xp: 240, time: "10분", ing: "15개" },
    { id: "ws-3", recipeId: 25, title: "따뜻하게 먹는 치즈 에그인헬", img: `${BASE_IMG_URL}/r_tab3_slide05.jpg`, rating: 4.6, xp: 240, time: "10분", ing: "5개" },
  ],
  ch: [
    { id: "ch-1", recipeId: 31, title: "마파두부", img: `${BASE_IMG_URL}/r_tab4_slide01.jpg`, rating: 4.8, xp: 360, time: "25분", ing: "9개" },
    { id: "ch-2", recipeId: 32, title: "짬뽕 스타일 볶음면", img: `${BASE_IMG_URL}/r_tab4_slide02.jpg`, rating: 4.7, xp: 300, time: "20분", ing: "8개" },
    { id: "ch-3", recipeId: 33, title: "깐풍기 소스 치킨", img: `${BASE_IMG_URL}/r_tab4_slide03.jpg`, rating: 4.9, xp: 450, time: "35분", ing: "10개" },
  ],
  salad: [
    { id: "salad-1", recipeId: 41, title: "리코타 치즈 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide01.jpg`, rating: 4.7, xp: 260, time: "10분", ing: "7개" },
    { id: "salad-2", recipeId: 42, title: "닭가슴살 시저 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide02.jpg`, rating: 4.8, xp: 320, time: "15분", ing: "8개" },
    { id: "salad-3", recipeId: 43, title: "연어 아보카도 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide03.jpg`, rating: 4.9, xp: 400, time: "12분", ing: "6개" },
  ],
};

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};

const MainRecipeSection = ({ title, data }) => {
  const [active, setActive] = useState("all");

  const list = useMemo(() => {
    if (active === "all") {
      const merged = [...data.kr, ...data.ws, ...data.ch, ...data.salad];
      return Array.from(new Map(merged.map((x) => [x.recipeId, x])).values());
    }
    return data[active] ?? [];
  }, [active, data]);
  const navigate = useNavigate();

  // 스와이프(드래그) 중 클릭 오작동 방지
  const isDraggingRef = useRef(false);

  const goDetail = (recipeId) => {
    if (!recipeId) return;
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <RecipeWrapper>
      <RecipeInner>
        <RecipeTitle>{title}</RecipeTitle>

        <RecipeTabs role="tablist" aria-label="레시피 카테고리">
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <RecipeTab
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "is-active" : ""}
                onClick={() => setActive(t.key)}
                as={motion.button}
                whileTap={{ scale: 0.98 }}
              >
                {t.label}
              </RecipeTab>
            );
          })}
        </RecipeTabs>

        <RecipePanel>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelMotion}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Swiper
                modules={[A11y]}
                spaceBetween={30}
                slidesPerView={5}
                slidesPerGroup={1}  
                grabCursor
                speed={520}

                onSliderMove={() => {
                  isDraggingRef.current = true;
                }}
                onTouchEnd={() => {
                  setTimeout(() => (isDraggingRef.current = false), 0);
                }}
                onTransitionEnd={() => {
                  isDraggingRef.current = false;
                }}
              >
                {list.map((r) => (
                  <SwiperSlide key={r.recipeId}>
                    <RecipeCard
                      as={motion.article}
                      whileHover={{ y: -2 }}
                      role="link"
                      tabIndex={0}
                      onClick={() => {
                        if (isDraggingRef.current) return;
                        goDetail(r.recipeId);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") goDetail(r.recipeId);
                      }}
                    >
                      <RecipeThumb>
                        <img src={r.img} alt={r.title} />
                      </RecipeThumb>

                      <RecipeBody>
                        <RecipeName title={r.title}>{r.title}</RecipeName>

                        <BadgeRow>
                          <Badge className="star">
                            <i aria-hidden="true">★</i>
                            {r.rating}
                          </Badge>
                          <Badge className="xp">XP {r.xp}</Badge>
                        </BadgeRow>

                        <MetaRow>
                          <MetaChip>조리시간&nbsp;|&nbsp;{r.time}</MetaChip>
                          <MetaChip>부족한 재료&nbsp;|&nbsp;{r.ing}</MetaChip>
                        </MetaRow>
                      </RecipeBody>
                    </RecipeCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </RecipePanel>
      </RecipeInner>
    </RecipeWrapper>
  );
};

export default MainRecipeSection;
