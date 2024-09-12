import { ArticleListCardGroupProps } from '@/types/common/common';
import styled from 'styled-components';
import ArticleListCard from './ArticleListCard';

function ArticleListCardGroup({ articleList }: ArticleListCardGroupProps) {
  return (
    <Container>
      {articleList.map((article, idx) => (
        <ArticleListCard
          key={idx}
          imgUrl={article.imgUrl}
          title={article.title}
          viewCount={article.viewCount}
          pressName={article.pressName}
          width="100%"
        />
      ))}
    </Container>
  );
}

export default ArticleListCardGroup;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;
