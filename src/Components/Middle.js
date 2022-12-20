import { Divmid } from "../Styles/Middlestyle";
import { useState } from "react";
import { Data } from "./Data";



export function Middle() {
    
    const [inputvalue, setInputvalue] = useState();

    const [streat, setStreat] = useState();
    const [district, setDistrict] = useState();
    const [city, setCity] = useState();
    const [uf, setUf] = useState();
    
    

    function Value(e) {

        const cep = e.target.value;

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data =>{
            console.log(data);

             setStreat(data.logradouro);
             setDistrict(data.bairro);
             setCity(data.localidade);
             setUf(data.uf);
    
            

        });
    }
    
    
    
    return(<> 

    <Divmid>
            
        
        <label for="Cep">CEP</label>
        
        <input type="tel" id="Cep" name="inputcep" placeholder="Type your cep"  onChange={(e)=>setInputvalue(e.target.value.replace(/[^0-9]/g,''))}/>  {/*replace(/[^0-9]/g,'') PARAMETRO PARA RECEBER APENAS NUMEROS*/} 

        
        <button type="submit" value={inputvalue} onClick={Value} >Buscar</button>


        
    </Divmid>

    <Data streat={streat}
    district={district}
    city={city}
    uf={uf}
    
    
    />
    
    
    </>)

}