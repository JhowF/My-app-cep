import { Divdata, DivConteudo } from "../Styles/Datastyle"

export function Data (){
    return(
        
        <Divdata>
             
            <div>

                <section>
                <label class="paddingclass" for="streat">RUA</label>
            <input class="paddingclass"  id="streat" type="text" placeholder="type your streat" name="ola " />

            <label class="paddingclass" for="district">BAIRRO</label>
            <input class="paddingclass" id="district" type="text" placeholder="type your district" />

            <label class="paddingclass" for="city">CIDADE</label>
            <input class="paddingclass" id="city" type="text" placeholder="type your city" />
                    
                </section>
                <section>
                <label class="paddingclass" for="uf">UF</label>
            <input class="paddingclass" id="uf" type="text" placeholder="type your uf" />

            <label class="paddingclass" for="adress">NÚMERO</label>
            <input class="paddingclass" id="adress" type="number" placeholder="type your adress" />

            <label class="paddingclass" for="complement">COMPLEMENTO</label>
            <input class="paddingclass" id="complement" type="text" placeholder="type your complement" />
                    
                </section>
            

            
               
            </div>
             
                 
        </Divdata>
        
    )
}