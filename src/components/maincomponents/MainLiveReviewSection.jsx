import React from "react";
import {
  LiveReviewWrapper,
  LiveReviewInner,
  LiveReviewHeader,

  LiveReviewTitleBox,
  LiveReviewSubTitle,
  LiveReviewTitle,
  LiveReviewMoreButton,

  LiveReviewGrid,
  LiveReviewCard,
  LiveReviewCardTop,
  LiveReviewMetaLeft,
  LiveReviewAvatar,

  LiveReviewRecipeTitle,
  LiveReviewBadgeRow,
  LiveReviewBadge,

  LiveReviewArrowBtn,
  LiveReviewDivider,
  LiveReviewUserName,
  LiveReviewContent,
  LiveReviewImageRow,
  LiveReviewThumb,
} from "../../pages/main/style";

const MainLiveReviewSection = ({
  subtitle = "프리고러들이 작성한",
  title = "실시간 생생 리뷰",
  onMoreClick,
  onCardClick,
  reviews = [],
}) => {
  return (
    <LiveReviewWrapper>
      <LiveReviewInner>
        <LiveReviewHeader>
          <LiveReviewTitleBox>
            <LiveReviewSubTitle>{subtitle}</LiveReviewSubTitle>
            <LiveReviewTitle>{title}</LiveReviewTitle>
          </LiveReviewTitleBox>

          <LiveReviewMoreButton type="button" onClick={onMoreClick}>
            더 보기 <span aria-hidden="true">›</span>
          </LiveReviewMoreButton>
        </LiveReviewHeader>

        <LiveReviewGrid>
          {reviews.map((r) => {
            const imgs = Array.isArray(r.images) ? r.images.slice(0, 3) : [];
            const countClass = `count-${Math.min(imgs.length || 0, 3)}`;

            return (
              <LiveReviewCard
                key={r.id}
                className={imgs.length > 0 ? "has-images" : "no-images"}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (onCardClick) onCardClick(r);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && onCardClick) onCardClick(r);
                }}
              >
                <LiveReviewCardTop>
                  <LiveReviewMetaLeft>
                    <LiveReviewAvatar>
                      {r.avatarUrl ? <img src={r.avatarUrl} alt="" /> : null}
                    </LiveReviewAvatar>

                    <div style={{ minWidth: 0 }}>
                      <LiveReviewRecipeTitle title={r.recipeTitle}>
                        {r.recipeTitle}
                      </LiveReviewRecipeTitle>

                      <LiveReviewBadgeRow>
                        <LiveReviewBadge className="star">
                          <i aria-hidden="true">★</i> Lv.{r.level}
                        </LiveReviewBadge>
                        <LiveReviewBadge className="xp">XP {r.xp}</LiveReviewBadge>
                      </LiveReviewBadgeRow>
                    </div>
                  </LiveReviewMetaLeft>

                  <LiveReviewArrowBtn type="button" aria-label="리뷰 상세로 이동">
                    ›
                  </LiveReviewArrowBtn>
                </LiveReviewCardTop>

                <LiveReviewDivider />

                <LiveReviewUserName>{r.userName}</LiveReviewUserName>
                <LiveReviewContent>{r.content}</LiveReviewContent>

                {imgs.length > 0 && (
                  <LiveReviewImageRow className={countClass}>
                    {imgs.map((src, idx) => (
                      <LiveReviewThumb key={`${r.id}-${idx}`}>
                        <img src={src} alt="" loading="lazy" />
                      </LiveReviewThumb>
                    ))}
                  </LiveReviewImageRow>
                )}
              </LiveReviewCard>
            );
          })}
        </LiveReviewGrid>
      </LiveReviewInner>
    </LiveReviewWrapper>
  );
};

export default MainLiveReviewSection;
