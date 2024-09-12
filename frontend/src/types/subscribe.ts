export interface SubscribeHeaderProps {
  subscribeNumber?: number;
  title: string;
  variant: 'subscribed' | 'all';
}

export interface PressInfo {
  imgUrl: string;
  pressName: string;
}

export interface SubscribePressCardProps extends PressInfo {
  isActive: boolean;
  isAllActive: boolean;
  onClick: () => void;
}

export interface SubscribePressFilterProps {
  subscribeData: PressInfo[];
}

export interface PressCardProps extends PressInfo {
  isSubscribed: boolean;
  onClick: () => void;
}
