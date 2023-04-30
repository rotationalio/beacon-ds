import styled, { css } from 'styled-components';
import { BtnProps } from './Button';
import { cssVar, lighten } from 'polished';

const primaryColor = cssVar('--colors-primary-default') as string;
const secondaryColor = cssVar('--colors-primary-400') as string;
const grayColor = cssVar('--colors-neutral-300') as string;

export const StyledButton = styled.button<BtnProps>`
  /* base */
  cursor: ${(props) => (props.onClick ? 'pointer' : 'auto')};
  background-color: inherit;
  transition: background-color 200ms ease;
  border-radius: 5px;
  :focus {
    outline: none;
  }

  :hover {
    background-color: ${(props) =>
      lighten(0.2)(getVariantColor(props.variant))};
  }

  /* variants */
  ${(props) => getVariantStyles(props.variant)}

  /* sizes */
  ${(props) => getSizeStyles(props.size)}

  /* disabled & loading */
  ${(props) =>
    (props.isLoading || props.disabled) && getDisabledStyles(props.variant)}
`;

const getVariantColor = (variant: BtnProps['variant'] = 'primary') => {
  const colorVarsMap = {
    primary: primaryColor,
    secondary: secondaryColor,
    ghost: grayColor,
  };
  return colorVarsMap[variant];
};

const getSizeStyles = (size: BtnProps['size'] = 'medium') => {
  return {
    small: css`
      min-width: 60px;
      font-size: 12px;
      & > svg {
        width: 20px;
        height: auto;
      }
    `,
    medium: css`
      min-height: 32px;
      min-width: 100px;
      padding: 8px 12px;
    `,
    large: css`
      min-height: 56px;
      min-width: 150px;
      padding: 8px 12px;
      font-size: 18px;
    `,
    custom: css``,
  }[size];
};

const getVariantStyles = (variant: BtnProps['variant'] = 'primary') => {
  return {
    primary: css`
      background-color: ${primaryColor};
    `,
    secondary: css`
      background-color: ${secondaryColor};
    `,
    ghost: css``,
  }[variant];
};

const getDisabledStyles = (variant: BtnProps['variant'] = 'primary') => {
  return css`
    background-color: ${lighten(0.4)(getVariantColor(variant))};
    cursor: not-allowed;
    :hover {
      background-color: ${lighten(0.4)(getVariantColor(variant))};
    }
  `;
};
