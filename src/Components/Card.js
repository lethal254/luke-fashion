import React from "react";
import styled from "styled-components";
import { HeadersH4, Paragraphs } from "../Elements/typography";
import Button from "../Elements/button";

const CardContainer = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  min-width: 25%;
  max-width: 400px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  transition: transform 700ms;
  :hover {
    transform: scale(1.04);
  }
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;
const Body = styled.div`
  display: flex;
  word-wrap: break-word;
  white-space: normal;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  text-align: center;
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

function Card() {
  return (
    <CardContainer>
      <Body>
        <Image src="https://images.pexels.com/photos/2609741/pexels-photo-2609741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <HeadersH4
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            marginTop: "0.5rem",
            color: "black",
          }}
        >
          Bomber Jacket
        </HeadersH4>
        <HeadersH4 style={{ fontWeight: "bold", color: "black" }}>
          <small>Ksh.</small> 300
        </HeadersH4>

        <Paragraphs>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
        </Paragraphs>
        <Button
          style={{ width: "100%", backgroundColor: "black", color: "white" }}
        >
          ADD TO CART
        </Button>
      </Body>
    </CardContainer>
  );
}

export default Card;
