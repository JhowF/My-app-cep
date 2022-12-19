import { Divmid } from "../Styles/Middlestyle";
import { useState } from "react";

export function Middle() {
    
    const [inputvalue, setInputvalue] = useState();

    function Test() {
        alert(inputvalue)
    }
    
    
    
    return(<> 

    <Divmid>
            
        
        <label for="Cep">CEP</label>
        
        <input type="tel" id="Cep" name="inputcep" placeholder="Type your cep" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>

        
        <button type="submit" onClick={Test}>Buscar</button>


        
    </Divmid>
    
    
    </>)

}