import styled from "styled-components";

export const UserIconWithName = (props) => {
  const {name,image} = props;
  return (
    <SContainer>
      <SImg width="160px" height="160px" alt={name} src={image} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;