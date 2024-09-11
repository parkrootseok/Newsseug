import { CategoryFilterProps } from '@/types/common/common';
import styled from 'styled-components';

function CategoryFilter({
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) {
  const categories = ['전체', '정치', '경제', '외교', '사건', '과학', '사회'];
  return (
    <Container>
      {categories.map((category) => (
        <FilterButton
          key={category}
          active={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </FilterButton>
      ))}
    </Container>
  );
}

export default CategoryFilter;

const Container = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const FilterButton = styled.button<{
  active?: boolean;
}>`
  display: flex;
  border: ${({ active }) => (active ? 'none' : '1px solid #EEEEEE')};
  font-size: 12px;
  width: 55px;
  height: 32px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? 'white' : 'black')};
  border-radius: 3px;
  background-color: ${({ active, theme }) =>
    active ? theme.mainColor : 'white'};
  cursor: pointer;
  outline: none;
`;
