import React from "react";
import * as S from "../../pages/reportandchallenge/style";

const ChallengeList = ({
  stats = [
    {
      key: "used",
      icon: "/assets/images/reportandchallenge/ic_used.png",
      label: "소비한 재료",
      value: "8개",
    },
    {
      key: "waste",
      icon: "/assets/images/reportandchallenge/ic_waste.png",
      label: "버린 재료",
      value: "1개",
    },
    {
      key: "save",
      icon: "/assets/images/reportandchallenge/ic_save.png",
      label: "절약한 금액",
      value: "15,000원",
    },
    {
      key: "co2",
      icon: "/assets/images/reportandchallenge/ic_co2.png",
      label: "CO2 절감량",
      value: "3.2kg",
    },
  ],
}) => {
  return (
    <S.ListSection>
      <S.ListInner>
        <S.ListTitle>나의 활동 리포트</S.ListTitle>

        <S.StatGrid>
          {stats.map((item) => (
            <S.StatCard key={item.key}>
              <S.StatIconWrap>
                <img src={item.icon} alt={item.label} />
              </S.StatIconWrap>

              <S.StatText>
                <S.StatLabel>{item.label}</S.StatLabel>
                <S.StatValue>{item.value}</S.StatValue>
              </S.StatText>
            </S.StatCard>
          ))}
        </S.StatGrid>
      </S.ListInner>
    </S.ListSection>
  );
};

export default ChallengeList;
