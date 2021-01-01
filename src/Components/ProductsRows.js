import React from "react";
import styled from "styled-components";
import { HeadersH4, HeadersH2 } from "../Elements/typography";
import Card from "./Card";

const Rows = styled.section`
  max-width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Row = styled.div`
  max-width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
`;
const RowHeader = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Products = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  max-width: 100vw;
  white-space: nowrap;
  padding: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function ProductsRows() {
  return (
    <Rows>
      <Row>
        <RowHeader>
          <HeadersH2 style={{ fontWeight: 400, fontSize: "3rem" }}>
            For Men
          </HeadersH2>
        </RowHeader>
        <Products>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Products>
      </Row>
    </Rows>
  );
}
