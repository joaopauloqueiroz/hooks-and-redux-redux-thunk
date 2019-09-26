import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.aside.attrs({
  className: props => props.classe
})`
  ${props => props.theme}
`;

export const Main = styled.main`
  width: 100%;
  background-color: green;
`;

export const Header = styled.header`
  height: 50px;
  background-color: pink;
`;

export const Button = styled.button``;
