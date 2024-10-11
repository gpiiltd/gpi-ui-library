import React$1, { ReactNode, FC } from 'react';

interface ButtonProps {
    bg_color?: string;
    text?: string;
    onClick?: () => void;
    active?: boolean;
    loading?: boolean;
    text_color?: string;
    border_color?: string;
}
interface TextInputProps {
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
declare enum TypographyVariant {
    TITLE = 0,
    SUBTITLE = 1,
    NORMAL = 2,
    BOLD = 3,
    SMALL = 4
}
interface TypographyProps {
    children: React.ReactNode;
    variant: TypographyVariant;
    className?: string;
}
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    width?: string;
    closeIcon?: string;
}
interface CardProps {
    titleLeft: React.ReactNode;
    titleRight: React.ReactNode;
    children: React.ReactNode;
    width?: string;
    height?: string;
}
interface LoaderProps {
    isOpen: boolean;
    onClose: () => void;
}
interface TableRow {
    name: string;
    description: string;
    highlightText?: string[];
}
interface SearchBarProps {
    placeholder?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    suggestions?: string[];
}
interface FooterProps {
    children: ReactNode;
    bg_color?: string;
    fullWidth?: string;
}

declare const Button: FC<ButtonProps>;

declare const InputField: React$1.FC<TextInputProps>;

declare const Card: FC<CardProps>;

declare const Footer: React$1.FC<FooterProps>;

interface HeaderProps {
    logo?: string;
    children?: React$1.ReactNode;
}
declare const Header: FC<HeaderProps>;

declare const Loader: FC<LoaderProps>;

declare const Modal: FC<ModalProps>;

type TableProps = {
    rows: TableRow[];
};
declare const TableComponent: React$1.FC<TableProps>;

declare const SearchBar: React$1.FC<SearchBarProps>;

declare const TextAreaField: FC<TextInputProps & {
    rows?: number;
}>;

declare const Typography: React$1.FC<TypographyProps>;

export { Button, Card, Footer, Header, InputField, Loader, Modal, TableComponent as PropsDescription, SearchBar, TextAreaField as TextArea, Typography };
