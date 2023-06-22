/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

import PostItem from './PostItem';

import { PostListItemType, PostType } from '../../types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

type PostListProps = {
  posts: PostListItemType[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <Wrapper>
      {posts.map(
        ({
          node: { id, frontmatter },
        }: PostType) => (
          <PostItem
            {...frontmatter}
            link="https://www.google.co.kr/"
            key={id}
          />
        ),
      )}
    </Wrapper>
  );
}
