
export const irParaHome = (navigate)=>{
    navigate("/")
  }

export const irParaPerfil = (navigate, nome)=>{
    navigate(`/profile/${nome}`)
  }
  
  export const irParaLogin = (navigate, nome)=>{
      navigate(`/login/${nome}`)
  }

export const errorPage = (navigate)=>{
    navigate("*")
}
