import ArticleListCardGroup from 'components/common/ArticleListCardGroup';
import SubLayout from 'components/common/SubLayout';
import data from 'db/data.json';

function History() {
  return (
    <SubLayout>
      <span>내 시청 기록</span>
      <ArticleListCardGroup articleList={data.articles} />
    </SubLayout>
  );
}

export default History;
