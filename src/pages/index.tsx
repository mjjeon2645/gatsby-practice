import styled from 'styled-components';

import Introduction from '../components/main/Introduction';
import Footer from '../components/common/Footer';
import Layout from '../components/layout';
import CategoryList from '../components/main/CategoryList';
import PostList from '../components/main/PostList';

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

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList />
        <Footer />
      </Container>
    </Layout>
  );
}
