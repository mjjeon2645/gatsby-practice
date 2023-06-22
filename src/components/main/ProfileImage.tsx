import styled from 'styled-components';

const Container = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const IMAGE_LINK = 'https://picsum.photos/id/237/200/300';

export default function ProfileImage() {
  return (
    <Container src={IMAGE_LINK} alt="profile-image" />
  );
}
