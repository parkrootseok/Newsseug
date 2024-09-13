import { useState } from 'react';
import SubLayout from 'components/common/SubLayout';
import CategoryFilter from 'components/common/CategoryFilter';
import ArticleListCardGroup from 'components/common/ArticleListCardGroup';
import SubscribeHeader from 'components/subscribe/SubscribeHeader';
import SubscribePressFilter from 'components/subscribe/SubscribePressFilter';
import data from 'db/data.json';

const subscribeNumber = 6;
function AllArticles() {
  const [activeCategory, setActiveCategory] = useState('전체');
  console.log(data);
  return (
    <SubLayout>
      <div>전체 기사</div>
      <div>
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ArticleListCardGroup articleList={data.articles} />
      </div>
    </SubLayout>
  );
}

export default AllArticles;
