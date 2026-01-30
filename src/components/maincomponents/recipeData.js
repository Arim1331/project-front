const BASE_IMG_URL = process.env.PUBLIC_URL + "/assets/images/main";

// 특별한 요리 레시피
export const RECIPE_DATA_YEAR_END = {
  kr: [
    { recipeId: 11, title: "몽글몽글 얼큰 순두부찌개", img: `${BASE_IMG_URL}/r_tab2_slide01.jpg`, rating: 4.9, xp: 420, time: "25분", ing: "18개" },
    { recipeId: 12, title: "바싹하게 구운 불고기 덮밥", img: `${BASE_IMG_URL}/r_tab2_slide02.jpg`, rating: 4.8, xp: 350, time: "30분", ing: "7개" },
    { recipeId: 13, title: "반숙 계란후라이를 얹은 김치볶음밥", img: `${BASE_IMG_URL}/r_tab2_slide03.jpg`, rating: 4.7, xp: 280, time: "15분", ing: "16개" },
  ],
  ws: [
    { recipeId: 21, title: "초간단한 한우 달달 토마토 스튜", img: `${BASE_IMG_URL}/r_tab3_slide01.jpg`, rating: 4.8, xp: 360, time: "25분", ing: "6개" },
    { recipeId: 22, title: "스윗 달콤한 콘앤치즈", img: `${BASE_IMG_URL}/r_tab3_slide02.jpg`, rating: 4.9, xp: 430, time: "20분", ing: "17개" },
    { recipeId: 23, title: "꾸덕한 버섯 크림 리조또", img: `${BASE_IMG_URL}/r_tab3_slide03.jpg`, rating: 4.6, xp: 240, time: "10분", ing: "5개" },
    { recipeId: 24, title: "매콤 쫀득한 치즈 떡볶이", img: `${BASE_IMG_URL}/r_tab3_slide04.jpg`, rating: 4.6, xp: 240, time: "10분", ing: "15개" },
    { recipeId: 25, title: "따뜻하게 먹는 치즈 에그인헬", img: `${BASE_IMG_URL}/r_tab3_slide05.jpg`, rating: 4.6, xp: 240, time: "10분", ing: "5개" },
  ],
  ch: [
    { recipeId: 31, title: "마파두부", img: `${BASE_IMG_URL}/r_tab4_slide01.jpg`, rating: 4.8, xp: 360, time: "25분", ing: "9개" },
    { recipeId: 32, title: "짬뽕 스타일 볶음면", img: `${BASE_IMG_URL}/r_tab4_slide02.jpg`, rating: 4.7, xp: 300, time: "20분", ing: "8개" },
    { recipeId: 33, title: "깐풍기 소스 치킨", img: `${BASE_IMG_URL}/r_tab4_slide03.jpg`, rating: 4.9, xp: 450, time: "35분", ing: "10개" },
  ],
  salad: [
    { recipeId: 41, title: "리코타 치즈 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide01.jpg`, rating: 4.7, xp: 260, time: "10분", ing: "7개" },
    { recipeId: 42, title: "닭가슴살 시저 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide02.jpg`, rating: 4.8, xp: 320, time: "15분", ing: "8개" },
    { recipeId: 43, title: "연어 아보카도 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide03.jpg`, rating: 4.9, xp: 400, time: "12분", ing: "6개" },
  ],
};

// 다이어트 레시피 (카테고리별 4개 이상)
export const RECIPE_DATA_DIET = {
  kr: [
    { recipeId: 101, title: "저염 닭가슴살 채소 볶음", img: `${BASE_IMG_URL}/d_tab2_slide01.jpg`, rating: 4.7, xp: 280, time: "20분", ing: "6개" },
    { recipeId: 102, title: "곤약 비빔국수", img: `${BASE_IMG_URL}/d_tab2_slide02.jpg`, rating: 4.6, xp: 250, time: "10분", ing: "5개" },
    { recipeId: 103, title: "두부 김치볶음", img: `${BASE_IMG_URL}/d_tab2_slide03.jpg`, rating: 4.6, xp: 260, time: "15분", ing: "5개" },
    { recipeId: 104, title: "닭가슴살 오이무침 덮밥", img: `${BASE_IMG_URL}/d_tab2_slide04.jpg`, rating: 4.8, xp: 320, time: "12분", ing: "6개" },
  ],
  ws: [
    { recipeId: 105, title: "에어프라이어 연어 스테이크", img: `${BASE_IMG_URL}/d_tab3_slide01.jpg`, rating: 4.8, xp: 340, time: "15분", ing: "4개" },
    { recipeId: 106, title: "저칼로리 닭가슴살 파스타", img: `${BASE_IMG_URL}/d_tab3_slide02.jpg`, rating: 4.7, xp: 300, time: "20분", ing: "6개" },
    { recipeId: 107, title: "오븐 구운 야채 플래터", img: `${BASE_IMG_URL}/d_tab3_slide03.jpg`, rating: 4.6, xp: 270, time: "25분", ing: "7개" },
    { recipeId: 108, title: "그릭요거트 소스 샌드위치", img: `${BASE_IMG_URL}/d_tab3_slide04.jpg`, rating: 4.7, xp: 290, time: "10분", ing: "6개" },
  ],
  ch: [
    { recipeId: 109, title: "두부 청경채 볶음", img: `${BASE_IMG_URL}/d_tab4_slide01.jpg`, rating: 4.6, xp: 260, time: "15분", ing: "5개" },
    { recipeId: 110, title: "숙주 듬뿍 닭가슴살 볶음", img: `${BASE_IMG_URL}/d_tab4_slide02.jpg`, rating: 4.7, xp: 280, time: "18분", ing: "6개" },
    { recipeId: 111, title: "저당 간장 소스 가지볶음", img: `${BASE_IMG_URL}/d_tab4_slide03.jpg`, rating: 4.5, xp: 240, time: "12분", ing: "5개" },
    { recipeId: 112, title: "곤약 잡채 스타일 볶음", img: `${BASE_IMG_URL}/d_tab4_slide04.jpg`, rating: 4.6, xp: 260, time: "20분", ing: "7개" },
  ],
  salad: [
    { recipeId: 113, title: "아보카도 닭가슴살 샐러드", img: `${BASE_IMG_URL}/d_tab5_slide01.jpg`, rating: 4.9, xp: 380, time: "10분", ing: "5개" },
    { recipeId: 114, title: "그릭요거트 단백질 샐러드", img: `${BASE_IMG_URL}/d_tab5_slide02.jpg`, rating: 4.8, xp: 360, time: "8분", ing: "4개" },
    { recipeId: 115, title: "연어 아보카도 샐러드", img: `${BASE_IMG_URL}/d_tab5_slide03.jpg`, rating: 4.8, xp: 370, time: "12분", ing: "6개" },
    { recipeId: 116, title: "참깨 드레싱 두부 큐브 샐러드", img: `${BASE_IMG_URL}/d_tab5_slide04.jpg`, rating: 4.7, xp: 320, time: "10분", ing: "6개" },
  ],
};

// 반찬 레시피 (카테고리별 4개 이상)
export const RECIPE_DATA_SIDE = {
  kr: [
    { recipeId: 201, title: "국민 반찬 소고기 장조림", img: `${BASE_IMG_URL}/r_tab2_slide01.jpg`, rating: 4.9, xp: 420, time: "40분", ing: "6개" },
    { recipeId: 202, title: "고소한 계란말이", img: `${BASE_IMG_URL}/r_tab2_slide02.jpg`, rating: 4.8, xp: 350, time: "10분", ing: "4개" },
    { recipeId: 203, title: "오징어채 간장볶음", img: `${BASE_IMG_URL}/r_tab2_slide03.jpg`, rating: 4.7, xp: 320, time: "15분", ing: "6개" },
    { recipeId: 204, title: "견과류 멸치볶음", img: `${BASE_IMG_URL}/r_tab3_slide01.jpg`, rating: 4.8, xp: 330, time: "12분", ing: "5개" },
  ],
  ws: [
    { recipeId: 205, title: "감자 버터구이", img: `${BASE_IMG_URL}/r_tab3_slide02.jpg`, rating: 4.7, xp: 300, time: "20분", ing: "4개" },
    { recipeId: 206, title: "버섯 마늘 볶음", img: `${BASE_IMG_URL}/r_tab3_slide03.jpg`, rating: 4.6, xp: 280, time: "12분", ing: "5개" },
    { recipeId: 207, title: "초간단 토마토 카프레제", img: `${BASE_IMG_URL}/r_tab3_slide04.jpg`, rating: 4.7, xp: 290, time: "8분", ing: "4개" },
    { recipeId: 208, title: "구운 아스파라거스 레몬소금", img: `${BASE_IMG_URL}/r_tab3_slide05.jpg`, rating: 4.6, xp: 270, time: "10분", ing: "4개" },
  ],
  ch: [
    { recipeId: 209, title: "마늘 간장 닭강정", img: `${BASE_IMG_URL}/r_tab4_slide01.jpg`, rating: 4.8, xp: 390, time: "25분", ing: "7개" },
    { recipeId: 210, title: "청경채 굴소스 볶음", img: `${BASE_IMG_URL}/r_tab4_slide02.jpg`, rating: 4.7, xp: 300, time: "10분", ing: "4개" },
    { recipeId: 211, title: "새우 브로콜리 볶음", img: `${BASE_IMG_URL}/r_tab4_slide03.jpg`, rating: 4.8, xp: 340, time: "15분", ing: "6개" },
    { recipeId: 212, title: "짜사이 오이무침", img: `${BASE_IMG_URL}/r_tab5_slide01.jpg`, rating: 4.6, xp: 260, time: "7분", ing: "3개" },
  ],
  salad: [
    { recipeId: 213, title: "오이 무침 샐러드", img: `${BASE_IMG_URL}/r_tab5_slide02.jpg`, rating: 4.6, xp: 260, time: "5분", ing: "3개" },
    { recipeId: 214, title: "브로콜리 참깨 무침", img: `${BASE_IMG_URL}/r_tab5_slide03.jpg`, rating: 4.7, xp: 280, time: "8분", ing: "4개" },
    { recipeId: 215, title: "양배추 코울슬로", img: `${BASE_IMG_URL}/r_tab4_slide01.jpg`, rating: 4.7, xp: 290, time: "10분", ing: "5개" },
    { recipeId: 216, title: "도시락용 감자 샐러드", img: `${BASE_IMG_URL}/r_tab4_slide02.jpg`, rating: 4.8, xp: 320, time: "20분", ing: "6개" },
  ],
};
