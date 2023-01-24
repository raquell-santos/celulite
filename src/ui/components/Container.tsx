import React from "react";
import { Container } from "@material-ui/core";

export default function App(props:any) {
  return (
    <Container> {props.children} </Container>
  )
}