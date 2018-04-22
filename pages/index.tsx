import React from "react";
import styled from "styled-components";
import withData from "./lib/withData";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default withData(() => <Title>Hello World!</Title>);
