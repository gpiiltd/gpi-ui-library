import { ReactNode } from "react";
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
    icon?: ReactNode;
    onClick?: () => void;
    focusStyle?: string;
}
export declare enum TypographyVariant {
    TITLE = 0,
    SUBTITLE = 1,
    NORMAL = 2,
    BOLD = 3,
    SMALL = 4
}
export interface TypographyProps {
    children: React.ReactNode;
    variant: TypographyVariant;
    className?: string;
}
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    width?: string;
    closeIcon?: string;
}
export interface CardProps {
    titleLeft: React.ReactNode;
    titleRight: React.ReactNode;
    children: React.ReactNode;
    width?: string;
    height?: string;
}
export interface LoaderProps {
    isOpen: boolean;
    onClose: () => void;
}
export interface TableRow {
    name: string;
    description: string;
    highlightText?: string[];
}
export interface BreadcrumbProps {
    steps: {
        label: string;
        route: string;
    }[];
    currentStep: number;
}
export interface SearchBarProps {
    placeholder?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    suggestions?: string[];
}
export interface FooterProps {
    children: ReactNode;
    bg_color?: string;
    fullWidth?: string;
}
