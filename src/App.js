import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import theme from "./Elements/theme";
import Carousel from "./Components/Carousel";
import ProductsRows from "./Components/ProductsRows";

const Container = styled.div`
  background-color: ${(props) => props.theme.lightBackgrounds};
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="app">
        <Navbar />
        <Carousel />
        <ProductsRows />
        <ProductsRows />
        <ProductsRows />
        <ProductsRows />
      </Container>
    </ThemeProvider>
  );
}

export default App;
