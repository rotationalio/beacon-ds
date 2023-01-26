export type SelectOptionType = {
  id?: number;
  label: string;
  value: string | number;
};

export type SelectSize = 'sm' | 'md' | 'lg' | 'xl';

export type SelectProps<T extends readonly object[], SelectOptionType> = {
  size?: SelectSize;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  isError?: boolean;
  hintText?: JSX.Element | string;
  value?: SelectOptionType;
  onChange?: (value?: SelectOptionType) => void;
  options: T;
  optionWidth?: string;
  selectedOption?: string | number;
  disabled?: boolean;
};
