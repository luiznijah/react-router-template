import Header from "../components/Header";
import { MainContainer} from "../style";

function LoginPage() {
  return (
    <MainContainer>
      <Header />
      <h1>Página de login</h1>
      <input name="email" placeholder="email"/>
      <input name="senha" placeholder="senha"/>
      <button>enviar</button>
    </MainContainer>
  );
}

export default LoginPage;
