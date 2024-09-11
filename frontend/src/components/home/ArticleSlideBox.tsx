import styled from 'styled-components';
import ArticleListCard from 'components/common/ArticleListCard';
import { ArticleSlideBoxProps } from '@/types/home';

function ArticleSlideBox({ ArticleList }: Readonly<ArticleSlideBoxProps>) {
  return (
    <ArticleSlideBoxStyle>
      {ArticleList?.map((article, index) => (
        <ArticleListCard key={index} {...article} />
      ))}
    </ArticleSlideBoxStyle>
  );
}
export default ArticleSlideBox;

const ArticleSlideBoxStyle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: auto;
  & > * {
    flex-shrink: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
