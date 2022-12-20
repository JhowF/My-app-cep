import { Divlinks } from "../Styles/Footerstyle";
import Email from "../img/e-mail.png"
import Face from "../img/facebook.png"
import Insta from "../img/instagram.png"
import Twitter from "../img/twitter.png"

export function Footer() {
    
    alert('Olá este site foi feito para treinar manipulação com API, funciona de maneira bem simples você digita um cep e clica em buscar e atraves da API Via cep você tera como retorno os dados do cep digitado.')
    return(
        <>
        <Divlinks>
        <a href="#"><img src={Email} alt=""/></a>
        <a href="#"><img src={Face} alt=""/></a>
        <a href="#"><img src={Insta} alt=""/></a>
        <a href="#"><img src={Twitter} alt=""/></a>
        </Divlinks>
        
        </>
    )
}