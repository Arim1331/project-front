import React from "react";
import {
  FooterOuter,
  FooterInner,
  Left,
  TopLinks,
  Dot,
  CompanyRow,
  CompanyName,
  Divider,
  CompanyDropdown,
  Chevron,
  Copyright,
  Right,
  IconGroup,
  IconBtn,
  SiteGroup,
  SiteBtn,
  PlusBtn,
} from "./style";

const Footer = () => {
  return (
    <FooterOuter>
      <FooterInner>
        {/* LEFT */}
        <Left>
          <TopLinks>
            <a href="/terms">이용약관</a>
            <Dot>•</Dot>
            <a href="/privacy">개인정보처리방침</a>
            <Dot>•</Dot>
            <a href="/about">ABOUT US</a>
            <Dot>•</Dot>
            <a href="/notice">공지사항</a>
          </TopLinks>

          <CompanyRow>
            <CompanyName>프리고고(주)</CompanyName>
            <Divider />
            <CompanyDropdown type="button">
              사업자 정보 <Chevron aria-hidden>▾</Chevron>
            </CompanyDropdown>
          </CompanyRow>

          <Copyright>Copyright © 프리고고, All Rights Reserved.</Copyright>
        </Left>

        {/* RIGHT */}
        <Right>
          <IconGroup>
            <IconBtn aria-label="Instagram">📷</IconBtn>
            <IconBtn aria-label="KakaoTalk">💬</IconBtn>
          </IconGroup>

          <SiteGroup>
            <SiteBtn type="button">관련사이트</SiteBtn>
            <PlusBtn type="button" aria-label="더보기">
              +
            </PlusBtn>
          </SiteGroup>
        </Right>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;

