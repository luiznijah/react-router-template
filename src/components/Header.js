import { useNavigate } from "react-router-dom";
import { irParaHome, irParaLogin, irParaPerfil} from "../routes/coordiator";
import {StyledHeader, StyledButton} from "../style"

function Header() {
  const navigate = useNavigate();
  
  
  return (
    <StyledHeader>
      <StyledButton onClick={()=> irParaHome(navigate)} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={()=> irParaPerfil(navigate, "perfil") } >
        Ir para página de perfil
      </StyledButton  >
      <StyledButton onClick={()=> irParaLogin(navigate, "login") } >
        Ir para página de login
      </StyledButton  >
    </StyledHeader>
  );
}

export default Header;
