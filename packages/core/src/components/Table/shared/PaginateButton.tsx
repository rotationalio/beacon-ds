import { Button } from '../../Button';
import { mergeClassnames } from '../../../utils';
interface PaginateButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const PaginateButton = ({
  className,
  onClick,
  disabled,
  children,
}: PaginateButtonProps) => {
  return (
    <Button
      className={mergeClassnames(
        'flex items-center justify-center w-24 h-8 mx-2',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      variant="ghost"
      size="custom"
    >
      {children}
    </Button>
  );
};
