import PressInfo from 'components/press/PressInfo';
import SubLayout from 'components/common/SubLayout';
import PressArticles from 'components/press/PressArticles';
import CategoryFilter from 'components/common/CategoryFilter';
import { useState } from 'react';

const PressInfoObj = {
  title: '연합뉴스',
  subscribers: 1231,
  isSubscribed: false,
  description: '',
};

function Press() {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [isSticky, setIsSticky] = useState(false);
  return (
    <SubLayout isPaddingZero={true} headerColor="#FF6D15">
      <h1>{isSticky ? PressInfoObj.title : null}</h1>
      <>
        <PressInfo />

        <CategoryFilter
          isPressPage={true}
          setParentSticky={setIsSticky}
          bgColor="#FF6D15"
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <PressArticles />
      </>
    </SubLayout>
  );
}

export default Press;
