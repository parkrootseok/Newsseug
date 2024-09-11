import SubscribeHeader from 'components/subscribe/SubscribeHeader';
import CategoryFilter from 'components/common/CategoryFilter';
import MainLayout from 'components/common/MainLayout';
import { useState } from 'react';
import SubscribePressFilter from 'components/subscribe/SubscribePressFilter';

const subscribeNumber = 7;
const subscribeData = [
  {
    imgUrl: 'aa',
    pressName: 'YTN',
  },
  {
    imgUrl: 'aa',
    pressName: 'KBS',
  },
  {
    imgUrl: 'aa',
    pressName: '연합뉴스 TV',
  },
  {
    imgUrl: 'aa',
    pressName: '한겨레',
  },
  {
    imgUrl: 'aa',
    pressName: '경향신문',
  },
  {
    imgUrl: 'aa',
    pressName: '경향신문',
  },
];

function Subscribes() {
  const [activeCategory, setActiveCategory] = useState('전체');

  return (
    <MainLayout>
      <SubscribeHeader subscribeNumber={subscribeNumber} />
      <SubscribePressFilter subscribeData={subscribeData} />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </MainLayout>
  );
}

export default Subscribes;
