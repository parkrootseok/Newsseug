import React from 'react';

export type ContainerProps = {
  children: React.ReactNode;
};

export type LayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

export type LogoHeaderProps = {
  size?: number;
};

export type NavItemProps = {
  icon: React.ReactNode;
  text?: string;
  isMain?: boolean;
  active: boolean;
  onClick: () => void;
};

export type MainLayoutProps = {
  children: React.ReactNode;
};

export interface ArticleListCardProps {
  imgUrl: string;
  title: string;
  viewCount: number;
  pressName: string;
}
