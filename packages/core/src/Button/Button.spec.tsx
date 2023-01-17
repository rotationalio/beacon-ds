import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render the children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should apply the primary color by default', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('beacon-bg-primary-900');
  });

  it('should apply the specified color', () => {
    const { getByRole } = render(<Button color="secondary">Click me</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('beacon-bg-secondary-900');
  });

  it('should apply the medium size by default', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('beacon-text-sm');
    expect(button).toHaveClass('beacon-py-3');
    expect(button).toHaveClass('beacon-px-4');
  });

  it('should apply the specified size', () => {
    const { getByRole } = render(<Button size="small">Click me</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('beacon-text-xs');
    expect(button).toHaveClass('beacon-py-1');
    expect(button).toHaveClass('beacon-px-2');
  });

  it('should apply the additional class name', () => {
    const { getByRole } = render(
      <Button className="my-custom-class">Click me</Button>
    );
    const button = getByRole('button');
    expect(button).toHaveClass('my-custom-class');
  });

  it('should render the left icon', () => {
    const { getByTestId } = render(
      <Button leftIcon={<span data-testid="left-icon">Left</span>}>
        Click me
      </Button>
    );
    expect(getByTestId('left-icon')).toBeInTheDocument();
  });

  it('should render the right icon', () => {
    const { getByTestId } = render(
      <Button rightIcon={<span data-testid="right-icon">Right</span>}>
        Click me
      </Button>
    );
    expect(getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should respond to click events', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('is disabled when the disabled prop is true', () => {
    const { getByRole } = render(<Button isDisabled>Click me</Button>);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });
});
