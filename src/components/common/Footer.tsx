import styled from 'styled-components';

const Wrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

export default function Footer() {
  return (
    <Wrapper>
      Thank you for Visiting My Blog, Have a Nice Day 🥰
      <br />
      © 2023 Developer Shanti, Powered By Gatsby.
    </Wrapper>
  );
}
