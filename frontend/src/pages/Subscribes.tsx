import SubscribeHeader from 'components/subscribe/SubscribeHeader';
import CategoryFilter from 'components/common/CategoryFilter';
import MainLayout from 'components/common/MainLayout';
import { useState } from 'react';
import SubscribePressFilter from 'components/subscribe/SubscribePressFilter';

import data from 'db/data.json';
import ArticleListCardGroup from 'components/common/ArticleListCardGroup';
const subscribeNumber = 6;

function Subscribes() {
  const [activeCategory, setActiveCategory] = useState('전체');

  return (
    <MainLayout>
      <SubscribeHeader subscribeNumber={subscribeNumber} />
      <SubscribePressFilter subscribeData={data.subscribeData} />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ArticleListCardGroup articleList={data.articles} />
    </MainLayout>
  );
}

export default Subscribes;
