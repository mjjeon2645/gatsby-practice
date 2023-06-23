import { render } from '@testing-library/react';

import Footer from './Footer';

test('Footer', () => {
  const { container } = render(<Footer />);

  expect(container).toHaveTextContent(/Have a Nice Day/);
});
