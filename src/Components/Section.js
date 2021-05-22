import React from "react";
import styled from "styled-components";
function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>

          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <Arrow src="down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 25, 31, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.86;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 13px;
  margin: 8px;
`;

const Arrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow=x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
const RightButton = styled(LeftButton)`
  background-color: white;

  opacity: 0.65;
  color: black;
`;
export default Section;
