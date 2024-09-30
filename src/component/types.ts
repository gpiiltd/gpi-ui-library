export interface ButtonProps {
  bg_color?: string;
  text?: string;
  onClick?: () => void;
  active?: boolean;
  loading?: boolean;
  text_color?: string;
  border_color?: string;
}

export interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  placeHolder?: string;

}

export enum TypographyVariant {
  TITLE,
  SUBTITLE,
  NORMAL,
  BOLD,
  SMALL,
}

export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  className?: string;
}
