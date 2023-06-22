import { Link, graphql } from 'gatsby';

import Text from '../components/Text';

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      }
    }
  }
}

export default function InfoPage({ data }: InfoPageProps) {
  return (
    <div>
      <Text text={data.site.siteMetadata.title} />
      <Text text={data.site.siteMetadata.description} />
      <Text text={data.site.siteMetadata.author} />
      <Link to="/">Go to MainPage</Link>
    </div>
  );
}

export const metdataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
