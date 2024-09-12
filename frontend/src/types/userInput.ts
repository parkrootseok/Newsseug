export interface InputSectionProps {
  title: string;
  input?: string;
  backGroundColor?: string;
  canEdit?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputTitleProps {
  title: string;
}

export interface InputBoxProps {
  input?: string;
  backGroundColor?: string;
  canEdit?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type GenderBoxProps = {
  icon: React.ReactNode;
  selected: boolean;
  onClick?: () => void;
};

export interface GenderSelectBoxProps {
  title: string;
  genderBoxList: GenderBoxProps[];
  onSelect: (index: number) => void;
}

export interface UserInputProps {
  nickname: string;
  birthDate: string;
  gender: string;
}
