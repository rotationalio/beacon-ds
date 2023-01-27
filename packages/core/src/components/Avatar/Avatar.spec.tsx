import { render, cleanup } from '@testing-library/react';
import Avatar from './Avatar';

afterEach(cleanup);

describe('Avatar', () => {
  it('should render the fallback text when the image fails to load', () => {
    const { getByText } = render(<Avatar alt="example" />);
    const fallbackText = getByText('EX');
    expect(fallbackText).toBeInTheDocument();
  });

  it('should merge the className with the tailwind class', () => {
    const { container } = render(
      <Avatar src="example.jpg" alt="example" className="w-10" />
    );
    const image = container.querySelector('img');
    expect(image).toHaveClass('w-10');
  });
});
