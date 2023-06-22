import styled from 'styled-components';

import { graphql } from 'gatsby';

import Introduction from '../components/main/Introduction';
import Footer from '../components/common/Footer';
import Layout from '../components/layout';
import CategoryList from '../components/main/CategoryList';
import PostList from '../components/main/PostList';

import { PostListItemType } from '../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CATEGORY_LIST = {
  All: 8,
  Web: 3,
  Algorithm: 2,
  News: 3,
};

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    }
  }
}

export default function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  return (
    <Layout>
      <Container>
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList posts={edges} />
        <Footer />
      </Container>
    </Layout>
  );
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`;
