import ArticleListCardGroup from 'components/common/ArticleListCardGroup';
import SubLayout from 'components/common/SubLayout';
import { useLocation } from 'react-router-dom';
import data from 'db/data.json';
import styled from 'styled-components';

function Scrap() {
  const location = useLocation();
  const { title } = location.state || {};
  return (
    <SubLayout>
      <ScrapTitle>{title}</ScrapTitle>
      <ArticleListCardGroup articleList={data.articles} />
    </SubLayout>
  );
}

export default Scrap;

const ScrapTitle = styled.span`
  max-width: 250px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
