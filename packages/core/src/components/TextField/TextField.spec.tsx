import { fireEvent, render } from '@testing-library/react';
import TextField from './TextField';

describe('<TextField />', () => {
  it('should display correclty the label', () => {
    const { getByLabelText } = render(<TextField label="Name" />);
    const input = getByLabelText('Name');
    expect(input).toBeInTheDocument();
  });

  it('should apply size props', () => {
    const { getByTestId } = render(<TextField size="medium" />);
    const input = getByTestId('input');
    expect(input).toHaveClass('beacon-text-base');
  });

  it('should display the right icon', () => {
    const rightIcon = <span>X</span>;
    const { getByTestId } = render(<TextField rightIcon={rightIcon} />);
    const icon = getByTestId('right-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should display the description', () => {
    const { getByText } = render(<TextField description="Enter your name" />);
    const description = getByText('Enter your name');
    expect(description).toBeInTheDocument();
  });

  it('should display error message', () => {
    const { getByText } = render(
      <TextField errorMessage="This field is required" />
    );
    const error = getByText('This field is required');
    expect(error).toBeInTheDocument();
  });

  it('should update value on change event', () => {
    const { getByLabelText } = render(<TextField label="Name" />);
    const input: any = getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toBe('John');
  });
});
