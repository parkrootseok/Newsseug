import React from 'react';

export type LayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

export type SubLayoutProps = {
  children: React.ReactNode;
  isSearch?: boolean;
  headerColor?: string;
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

export interface ArticleListCardProps {
  imgUrl: string;
  title: string;
  viewCount: number;
  pressName: string;
}

export interface MainSectionProps {
  isSearch?: boolean;
}

export interface SubHeaderWrapper {
  headerColor?: string;
}
