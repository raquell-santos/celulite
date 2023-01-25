import Container from "../../components/Container";
import Introduction from "../../fragments/Introduction";


export default function Home() {
  return (
    <div className="pt-8 pb-8 bg-slate-800 h-screen flex flex-col justify-center content-center">
      <Container>
        <Introduction/>
      </Container>
    </div>
  )
}