import { render } from '@testing-library/react';

import Introduction from './Introduction';

test('Introduction', () => {
  const { container } = render(<Introduction />);

  expect(container).toHaveTextContent(/Welcome to my Tech-Blog/);
});
