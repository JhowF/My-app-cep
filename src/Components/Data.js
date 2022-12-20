import { Divdata, DivConteudo } from "../Styles/Datastyle"

export function Data (props){
    return(
        
        <Divdata>
             
            <div>

                <section>
                <label class="paddingclass" for="streat">RUA</label>
            <input class="paddingclass" value={props.streat}  id="streat" type="text" placeholder="Streat" name="ola " />

            <label class="paddingclass" for="district">BAIRRO</label>
            <input class="paddingclass" value={props.district}  id="district" type="text" placeholder="District" />

            <label class="paddingclass" for="city">CIDADE</label>
            <input class="paddingclass" value={props.city}  id="city" type="text" placeholder="City" />
                    
                </section>
                <section>
                <label class="paddingclass" for="uf">UF</label>
            <input class="paddingclass"  value={props.uf}  id="uf" type="text" placeholder="Uf" />

            <label class="paddingclass" for="adress">NÚMERO</label>
            <input class="paddingclass" id="adress" type="number" placeholder="type your adress" />

            <label class="paddingclass" for="complement">COMPLEMENTO</label>
            <input class="paddingclass"  id="complement" type="text" placeholder="type your complement" />
                    
                </section>
            

            
               
            </div>
             
                 
        </Divdata>
        
    )
}