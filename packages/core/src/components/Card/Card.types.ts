import React from 'react';

export interface CardWrapperProps {
    className?: string;

}

export interface CardComposition {
    Header?: React.FC<{
        className?: string;
    }>;
    Body?: React.FC<{
        className?: string;
    }>;
}

export interface CardProps extends CardWrapperProps {
    title?: string;
    className?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    imgSrc?: React.SVGProps<SVGSVGElement> | string;
    imgAlt?: string;
    imgClasses?: string;
    imgPosition?: 'top' | 'bottom' | 'left' | 'right';
}
