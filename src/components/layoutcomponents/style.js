import styled from "styled-components";
import { Link } from "react-router-dom";

// 플로팅 액션 섹션
export const FloatingWrapper = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 1000;
`;

export const ScrollButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;

  background-color: ${({ theme }) => theme.PALLETE.primary.main};

  color: #fff;

  font-size: 20px;
  font-weight: 700;

  cursor: pointer;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  }
`;

/* ================= Header styles ================= */

export const HeaderOuter = styled.header`
  width: 100%;
  background: #fff;
`;

export const HeaderInner = styled.div`
  height: 160px;
  max-width: 1920px;
  margin: 0 auto;

  padding: 0 240px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  @media (max-width: 1400px) {
    padding: 0 80px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 18px 16px;
    gap: 14px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`;

export const LogoArea = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #111;
  white-space: nowrap;
`;

export const LogoIcon = styled.span`
  color: #ff3b30;
  font-size: 18px;
`;

export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.4px;
`;

export const SearchArea = styled.div`
  flex: 1;
  max-width: 760px;
  height: 44px;

  border: 2px solid #ff3b30;
  border-radius: 10px;

  display: flex;
  align-items: center;
  padding: 0 10px 0 14px;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;

  font-size: 14px;
`;

export const SearchBtn = styled.button`
  width: 34px;
  height: 34px;

  border: none;
  background: transparent;
  cursor: pointer;

  color: #ff3b30;
  font-size: 16px;

  display: grid;
  place-items: center;
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const RightLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  color: #111;

  &:hover {
    text-decoration: underline;
  }
`;

export const RightIcon = styled.span`
  font-size: 14px;
`;

export const RightText = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 56px;

  @media (max-width: 900px) {
    gap: 22px;
    flex-wrap: wrap;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;

  font-size: 14px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;


/* ========== Footer styles ========== */

export const FooterOuter = styled.footer`
  width: 100%;
  background: #f5f5f5;
`;

export const FooterInner = styled.div`
  height: 216px;
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 360px;

  @media (max-width: 1400px) {
    padding: 0 80px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 28px 20px;
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TopLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    font-size: 12px;
    color: #222;
    text-decoration: none;
    letter-spacing: -0.2px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Dot = styled.span`
  font-size: 12px;
  color: #777;
`;

export const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #444;
`;

export const CompanyName = styled.span`
  font-size: 12px;
  letter-spacing: -0.2px;
`;

export const Divider = styled.span`
  width: 1px;
  height: 12px;
  background: #d6d6d6;
`;

export const CompanyDropdown = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  font-size: 12px;
  color: #444;
  letter-spacing: -0.2px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Chevron = styled.span`
  font-size: 12px;
  transform: translateY(-1px);
  color: #666;
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 11px;
  color: #b7b7b7;
  letter-spacing: -0.2px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IconBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: #e9e9e9;
  cursor: pointer;

  display: grid;
  place-items: center;

  font-size: 16px;
  color: #666;

  &:hover {
    background: #e2e2e2;
  }
`;

export const SiteGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SiteBtn = styled.button`
  height: 38px;
  padding: 0 18px;
  border-radius: 999px;
  border: none;
  background: #e9e9e9;
  cursor: pointer;

  font-size: 12px;
  color: #444;
  letter-spacing: -0.2px;

  &:hover {
    background: #e2e2e2;
  }
`;

export const PlusBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: none;
  background: #e9e9e9;
  cursor: pointer;

  display: grid;
  place-items: center;

  font-size: 18px;
  color: #666;
  line-height: 0;

  &:hover {
    background: #e2e2e2;
  }
`;