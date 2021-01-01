import styled from "styled-components";

export const HeadersH1 = styled.div`
  color: ${(props) => {
    if (props.color === "dark") {
      return props.theme.textDark;
    } else if (props.color === "light") {
      return props.theme.textLight;
    } else {
      return props.theme.textGrey;
    }
  }};
  font-size: ${(props) => props.theme.fontXLarge}rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontLarge}rem;
  }
  font-family: ${(props) => props.theme.fontFamily};
  margin-bottom: 1rem;
`;
export const HeadersH2 = styled.div`
  color: ${(props) => {
    if (props.color === "dark") {
      return props.theme.textDark;
    } else if (props.color === "light") {
      return props.theme.textLight;
    } else {
      return props.theme.textGrey;
    }
  }};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontLarge}rem;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSmall}rem;
  }
`;
export const HeadersH4 = styled.div`
  color: ${(props) => {
    if (props.color === "dark") {
      return props.theme.textDark;
    } else if (props.color === "light") {
      return props.theme.textLight;
    } else {
      return props.theme.textGrey;
    }
  }};
  font-family: ${(props) => props.theme.fontFamily};

  font-size: ${(props) => props.theme.fontMedium}rem;
  margin-bottom: 1rem;
`;
export const Paragraphs = styled.div`
  color: ${(props) => {
    if (props.color === "dark") {
      return props.theme.textDark;
    } else if (props.color === "light") {
      return props.theme.textLight;
    } else {
      return props.theme.textGrey;
    }
  }};
  font-family: ${(props) => props.theme.fontFamily};
  margin-bottom: 2rem;

  font-size: ${(props) => props.theme.fontSmall}rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
