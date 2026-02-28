import React, { useState, useMemo } from "react";
import * as S from "../../pages/community/style";

/**
 * PostCard
 * - 트렌딩 캐러셀 카드 / 피드 공용
 * - "내 글"은 닉네임 도트 + 카드 약한 강조로 표시
 */

// 배지 기준 상수
const NEW_DAYS = 3;
const POPULAR_DAYS = 30;
const POPULAR_TOP_N = 8;

const PostCard = ({ item, w, onClick, meNickname, allItems = [], onLikeToggle }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item?.likes ?? 0);

  const handleLikeToggle = (e) => {
    e.stopPropagation();

    //  부모가 로그인 체크/처리할 기회
    if (onLikeToggle) {
      onLikeToggle(item, () => {
        //  로그인 통과했을 때만 실제 토글 실행
        setLiked((prev) => {
          setLikeCount((c) => (prev ? c - 1 : c + 1));
          return !prev;
        });
      });
      return;
    }

    // fallback(부모가 없으면 그냥 토글)
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  const recipeImage =
    item?.images?.[0] ?? item?.recipeImage ?? "/assets/images/oatmeal.svg";
  const profileImage = item?.profileImage ?? "/assets/images/pinggu.svg";
  const recipeName = item?.recipeName ?? item?.recipeTitle ?? "김치찌개";
  const nickname = item?.nickname ?? "굴곡밥러버";
  const level = item?.level ?? 1;
  const xp = item?.xp ?? 0;
  const createdAt = item?.createdAt ?? "방금 전";
  const desc =
    item?.desc ??
    item?.content ??
    "매생이 향이 진해서 국을 뜨자마자 바다 향이 확 올라와요. 굴도 비린 맛 하나 없이 신선해서 씹을 때마다 탱글한 식감이 느껴졌어요.";

  // ✅ 내 글 판별
  const isMine = useMemo(() => {
    const me = String(meNickname ?? "").trim();
    const author = String(nickname ?? "").trim();
    return !!me && !!author && me === author;
  }, [meNickname, nickname]);

  // 날짜 파싱 헬퍼 (createdAt 포맷이 애매하면 여기서 최대한 안전하게)
  const parseDate = (v) => {
    if (!v) return null;

    // "2026. 02. 28" 같은 포맷 대비
    if (typeof v === "string") {
      const normalized = v.replace(/\./g, "-").replace(/\s+/g, "").slice(0, 10); // "2026-02-28"
      const d1 = new Date(v);
      if (!Number.isNaN(d1.getTime())) return d1;

      const d2 = new Date(normalized);
      if (!Number.isNaN(d2.getTime())) return d2;
    }

    const d = new Date(v);
    if (Number.isNaN(d.getTime())) return null;
    return d;
  };

  // 🔥 NEW: 작성 후 3일 이내
  const isNew = useMemo(() => {
    const d = parseDate(item?.createdAt);
    if (!d) return false;
    const diffDays = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays <= NEW_DAYS;
  }, [item?.createdAt]);

  // ❤️ 인기: 최근 30일 글 중 좋아요 TOP N
  const isPopular = useMemo(() => {
    if (!allItems?.length) return false;

    const now = Date.now();

    const recent30 = allItems
      .map((x) => {
        const d = parseDate(x?.createdAt);
        return { ...x, _createdTime: d ? d.getTime() : null };
      })
      .filter((x) => {
        if (!x._createdTime) return false;
        const diffDays = (now - x._createdTime) / (1000 * 60 * 60 * 24);
        return diffDays <= POPULAR_DAYS;
      });

    const sorted = [...recent30].sort(
      (a, b) => (b.likes ?? 0) - (a.likes ?? 0),
    );

    const topIds = new Set(sorted.slice(0, POPULAR_TOP_N).map((x) => x.id));
    return topIds.has(item?.id);
  }, [allItems, item?.id]);

  return (
    <S.CarouselCard
      type="button"
      $w={w}
      $mine={isMine}
      onClick={onClick}
    >
      {/* 이미지 영역 */}
      <S.CardImageWrap>
        {(isNew || isPopular) && (
          <S.BadgeWrap>
            {isNew && <S.BadgeNew>🔥 NEW</S.BadgeNew>}
            {isPopular && <S.BadgePopular>❤️ 인기</S.BadgePopular>}
          </S.BadgeWrap>
        )}

        <S.CardImageArea src={recipeImage} alt={`${recipeName} 이미지`} />
      </S.CardImageWrap>

      <S.CardContentArea>
        <S.CardTitleRow>
          <S.CardTitleLeft>
            <S.ProfileImg src={profileImage} alt="유저 프로필" />
            <S.CardTitle>{recipeName}</S.CardTitle>
          </S.CardTitleLeft>

          <S.CardLikeArea onClick={handleLikeToggle}>
            <S.HeartIcon $liked={liked} />
            <S.LikeCount>{likeCount}</S.LikeCount>
          </S.CardLikeArea>
        </S.CardTitleRow>

        <S.CardDivider />

        <S.CardMetaRow>
          <S.MetaLeft>
            <S.UserNickName $mine={isMine}>{nickname}</S.UserNickName>
          </S.MetaLeft>

          <S.MetaCenter>
            <S.BadgeChip>
              <S.BadgeChipIcon src="/assets/icons/star.svg" alt="별 아이콘" />
              Lv.{level}
            </S.BadgeChip>

            <S.BadgeChip2>XP {xp}</S.BadgeChip2>
          </S.MetaCenter>

          <S.MetaRight>
            <S.CardDateText>{createdAt}</S.CardDateText>
          </S.MetaRight>
        </S.CardMetaRow>

        <S.CardDesc>{desc}</S.CardDesc>
      </S.CardContentArea>
    </S.CarouselCard>
  );
};

export default PostCard;
