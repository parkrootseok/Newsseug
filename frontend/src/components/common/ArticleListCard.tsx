import { ArticleListCardProps } from '@/types/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 180px;
  height: 250px;
  overflow: hidden;
  border-radius: 5px;
`;

const Thumbnail = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

const ArticleInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  padding: 5px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
const ArticleTitle = styled.h1`
  color: ${({ theme }) => theme.bgColor};
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const ViewCount = styled.p`
  color: ${({ theme }) => theme.bgColor};
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PressTag = styled.div`
  display: inline-flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 5px;
  left: 5px;
  color: ${({ theme }) => theme.bgColor};
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 11.2px */
  letter-spacing: -0.2px;
`;

function formatViewCount(viewCount: number): string {
  if (viewCount >= 1000000000) {
    return (viewCount / 1000000000).toFixed(1) + 'B'; // billion 단위
  } else if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + 'M'; // million 단위
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + 'K'; // thousand 단위
  } else {
    return viewCount.toString(); // 천 이하일 경우 그대로 출력
  }
}

function ArticleListCard({
  imgUrl,
  title,
  viewCount,
  pressName,
}: ArticleListCardProps) {
  return (
    <Wrapper>
      <Thumbnail src={imgUrl} />
      <PressTag>{pressName}</PressTag>
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ViewCount>조회수 {formatViewCount(viewCount)}회</ViewCount>
      </ArticleInfo>
    </Wrapper>
  );
}

export default ArticleListCard;
