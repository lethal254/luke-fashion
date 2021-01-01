import styled from "styled-components";

export default styled.button`
  width: fit-content;
  text-align: center;
  padding: 0.5rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.color};
  font-weight: bold;
  font-size: 2rem;
  color: ${(props) => props.theme.textDark};
  transition: all 0.3s ease;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    color: ${(props) => props.theme.textGrey};
    opacity: 50%;
  }
  @media (max-width: 768px) {
    padding: 0.1;
  }
`;
