export interface ArticleListCardProps {
  imgUrl: string;
  title: string;
  viewCount: number;
  pressName: string;
  width?: string;
  height?: string;
}

export interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export interface ArticleListCardGroupProps {
  articleList: ArticleListCardProps[];
}
