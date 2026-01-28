// UI / UX 가이드에 따른 스타일 정의 
const theme = {
  // 1. 컬러 팔레트: 그레이스케일 순서 및 용도 정리
  PALLETE: {
    primary: {
      main: "#ff4e37",
      sub: "#fff2e8",
    },
    secondary: "#018264",
    white: "#ffffff",
    gray: {
       50: "#fafafa",
      100: "#f2f2f2",
      200: "#e6e6e6",
      300: "#d9d9d9",
      400: "#cccccc",
      500: "#c0c0c0",
      600: "#b3b3b3",
      700: "#a6a6a6",
      800: "#999999",
      900: "#8d8d8d",
      footerMenu: "#c4c4c4", 
      footerSub: "#666666",  
    },
    error: "#ff0000",
    background: {
      white: "#ffffff",
      gray: "#f2f2f2"
    },
    mainblack: "#000000",
    headerandfooter : "#262626"
  },

  // 2. 폰트 사이즈: h1부터 h8까지 정의
  FONT_SIZE: {
    h1: "48px",
    h2: "36px",
    h3: "32px",
    h4: "28px",
    h5: "24px",
    h6: "20px",
    h7: "16px",
    h8: "12px",
  },

  // 3. 폰트 굵기
  FONT_WEIGHT: {
    PRETENDARD: {
      THIN: "100",
      EXTRALIGHT: "200",
      LIGHT: "300",
      REGULAR: "400",
      MEDIUM: "500",
      SEMIBOLD: "600",
      BOLD: "700",
      EXTRABOLD: "800",
      BLACK: "900",
    },
    GIANTS: {
      REGULAR: "400",
      BOLD: "700",
    },
  },

  // 4. 행간(Line-Height): 글자 크기의 약 1.5배로 가독성 확보 및 h8 추가
  FONT_LINE: {
    h1: "72px",
    h2: "54px",
    h3: "48px",
    h4: "42px",
    h5: "36px",
    h6: "30px",
    h7: "24px",
    h8: "18px",
  },

  // 5. Border Radius: 버튼, 카드, 모달 라운드 값 통일
  RADIUS: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  // 6. 간격 시스템(Spacing): 4px 단위 기반 여백 규칙 정의 (margin / padding / gap 통일)
  SPACING: {
    // 기준 단위 (Design Base Unit)
    unit: 4,

    // Numeric scale (4px 기반 디자인 시스템용)
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "48px",
    13: "52px",
    14: "56px",
    15: "60px",
    16: "64px",
    18: "72px",
    20: "80px",
    24: "96px",
    30: "120px",

    // Decimal scale (10px 단위 직관용)
    px10: "10px",
    px20: "20px",
    px30: "30px",

    // Semantic spacing (컴포넌트 의미 기반)
    xs: "4px",    // 아이콘/텍스트 최소 간격
    sm: "8px",    // 텍스트 그룹 간격
    md: "16px",   // 기본 패딩
    lg: "24px",   // 카드 내부 패딩
    xl: "32px",   // 섹션 내부 여백
    xxl: "48px",  // 섹션 구분 여백

    // Layout spacing (페이지 레이아웃 기준)
    section: "80px",     // 섹션 상/하 기본 여백
    container: "120px", // PC 기준 좌/우 레이아웃 패딩
  },

};

export default theme;