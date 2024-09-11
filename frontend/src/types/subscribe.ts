export interface SubscribeHeaderProps {
  subscribeNumber: number;
}

export interface PressInfo {
  imgUrl: string;
  pressName: string;
}

export interface PressCardProps extends PressInfo {
  isActive: boolean;
  isAllActive: boolean;
  onClick: () => void;
}

export interface SubscribePressFilterProps {
  subscribeData: PressInfo[];
}
