import { Container as MUIContainer } from "@material-ui/core";

export default function Container({children}:any) {
  return (
    <MUIContainer maxWidth='sm'> {children} </MUIContainer>
  )
}