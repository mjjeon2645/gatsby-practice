import { Link } from 'gatsby';

import styled from 'styled-components';

type CategoryItemProps = {
  active: boolean;
}

type GatsbyLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps

type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

export default function CategoryList({
  selectedCategory,
  categoryList,
}: CategoryListProps) {
  return (
    <Wrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #
          {name}
          (
          {count}
          )
        </CategoryItem>
      ))}
    </Wrapper>
  );
}
