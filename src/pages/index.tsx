import { Link } from 'gatsby';

import Text from '../components/Text';

export default function IndexPage() {
  return (
    <div>
      <Text text="HomePage. Hello, world!" />
      <Link to="/info">Go to InfoPage</Link>
    </div>
  );
}
