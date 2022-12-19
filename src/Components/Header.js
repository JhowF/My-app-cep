import { TopHeader, Titulo } from "../Styles/Headerstyle"
import Imglogo from "../img/logo.png"

export function Header() {
    return(
    <TopHeader>

    <img src={Imglogo} alt="Logo"/>
      
    <Titulo>
        <div>
            
        <h1>SEARCH CEP</h1> 

    </div>

    </Titulo>

    </TopHeader>
    
    )
}

{/* <h1>SEARCH CEP</h1> 

<p>Encontrar seu cep nunca foi tão fácil</p> */}