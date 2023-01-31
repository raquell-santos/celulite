import { Container as MUIContainer } from "@material-ui/core";

export default function Container({children}:any) {
  return (
    <MUIContainer maxWidth='sm' style={{overflowY: 'auto', marginTop: '30px'}}> {children} </MUIContainer>
  )
}