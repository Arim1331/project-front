import React from "react";
// import { Link } from "react-router-dom";
import {
  HeaderOuter,
  HeaderInner,
  TopRow,
  LogoArea,
  LogoIcon,
  LogoText,
  SearchArea,
  SearchInput,
  SearchBtn,
  RightArea,
  RightLink,
  RightIcon,
  RightText,
  BottomRow,
  Nav,
  NavItem,
} from "./style";

const Header = () => {
  return (
    <HeaderOuter>
      <HeaderInner>
        {/* Top Row */}
        <TopRow>
          <LogoArea to="/">
            <LogoIcon aria-hidden>🧰</LogoIcon>
            <LogoText>프리고고</LogoText>
          </LogoArea>

          <SearchArea>
            <SearchInput placeholder=" " aria-label="검색" />
            <SearchBtn type="button" aria-label="검색">
              🔍
            </SearchBtn>
          </SearchArea>

          <RightArea>
            <RightLink to="/login">
              <RightIcon aria-hidden>👤</RightIcon>
              <RightText>로그인</RightText>
            </RightLink>

            <RightLink to="/profile">
              <RightIcon aria-hidden>▦</RightIcon>
              <RightText>프로필</RightText>
            </RightLink>
          </RightArea>
        </TopRow>

        {/* Bottom Row */}
        <BottomRow>
          <Nav>
            <NavItem to="/myfridge">나의 냉장고</NavItem>
            <NavItem to="/foodrecommendation">추천 요리</NavItem>
            <NavItem to="/communitymain">커뮤니티</NavItem>
            <NavItem to="/levelandbadge">레벨&뱃지</NavItem>
            <NavItem to="/reportandchallenge">리포트&챌린지</NavItem>
          </Nav>
        </BottomRow>
      </HeaderInner>
    </HeaderOuter>
  );
};

export default Header;