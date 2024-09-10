import CategoryFilter from 'components/common/CategoryFilter';
import MainLayout from 'components/common/MainLayout';
import { useState } from 'react';

function Subscribes() {
  const [activeCategory, setActiveCategory] = useState('전체');

  return (
    <MainLayout>
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </MainLayout>
  );
}

export default Subscribes;
