export interface SubTitleProps {
  title: string;
  url?: string;
}

export interface ScrapProps {
  width?: string;
  height?: string;
  thumbnailUrl: string;
  scrapTitle: string;
  scrapCnt: number;
  onClick?: () => void;
}
