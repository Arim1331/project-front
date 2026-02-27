import styled from "styled-components";
import { FONT_STYLE } from "../../styles/common";
import theme from "../../styles/theme";

const S = {};

S.Screen = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
align-items:center;
`
S.Wrapper = styled.div`
width: 360px;
height: 470px;
display: flex;
flex-direction:column;
align-items:center;
`
S.Title = styled.p`
${FONT_STYLE.GIANTS.H4_BOLD};
color:${theme.PALLETE.headerandfooter};
`
S.ServiceWrapper = styled.div`
display:flex;
gap:15px;
${FONT_STYLE.PRETENDARD.H8_REGULAR};
color:${theme.PALLETE.gray[900]};
`

export default S;