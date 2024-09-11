import { ScrapProps } from '@/types/mypage';
import styled from 'styled-components';
import scrapIcon from 'assets/scrapIcon.svg';

function Scrap({
  width = '180px',
  height = '250px',
  thumbnailUrl,
  scrapTitle,
  scrapCnt,
}: ScrapProps) {
  return (
    <Wrapper width={width} height={height} url={thumbnailUrl}>
      <ScrapTitle>{scrapTitle}</ScrapTitle>
      <ScrapTag>
        <img src={scrapIcon} />
        <span>{scrapCnt}</span>
      </ScrapTag>
    </Wrapper>
  );
}

export default Scrap;

const Wrapper = styled.div<{ width?: string; height?: string; url: string }>`
  position: relative;
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 5px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover; /* 이미지가 Wrapper에 맞게 꽉 채우되, 비율을 유지 */
  background-position: center; /* 이미지를 중앙에 맞춤 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`;

const ScrapTitle = styled.h1`
  color: #fff;
`;

const ScrapTag = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  * {
    width: 20px;
    height: 20px;
    color: white;
  }
`;
