import React, { useState } from "react";
import { Aside, Container, Main, Header, Button } from "./styles";
const theme = {
  width: "250px",
  backgroundColor: "red",
  height: "100vh",
  transition: "1s"
};

const theme2 = {
  width: 0,
  backgroundColor: "red",
  height: "100vh",
  transition: "1s"
};

export default function(props) {
  const [toggle, setToggle] = useState(true);

  const toggleOpen = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Aside theme={toggle ? theme : theme2}>
        <nav>
          <ul>
            <li>Product</li>
            <li>Items</li>
            <li>Users</li>
          </ul>
        </nav>
      </Aside>
      <Main>
        <Header>
          <Button onClick={toggleOpen}>===</Button>
        </Header>
      </Main>
    </Container>
  );
}
