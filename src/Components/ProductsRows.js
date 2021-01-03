import React, { useRef } from "react";
import styled from "styled-components";
import { HeadersH4, HeadersH2 } from "../Elements/typography";
import Card from "./Card";
import Button from "../Elements/button";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Rows = styled.section`
  max-width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Row = styled.div`
  position: relative;

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
const ProductNavigation = styled.div`
  display: flex;
  justify-content: center;
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
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <Rows>
      <Row>
        <RowHeader>
          <HeadersH2 style={{ fontWeight: 400, fontSize: "3rem" }}>
            For Men
          </HeadersH2>
        </RowHeader>
        <ProductNavigation>
          <Button style={{ margin: "1rem" }} onClick={() => scroll(-80)}>
            <ArrowBackIos style={{ fontSize: "3rem" }} />
          </Button>

          <Products ref={ref}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Products>
          <Button style={{ margin: "1rem" }} onClick={() => scroll(+80)}>
            <ArrowForwardIos style={{ fontSize: "3rem" }} />
          </Button>
        </ProductNavigation>
      </Row>
    </Rows>
  );
}
