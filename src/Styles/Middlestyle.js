import styled from "styled-components";

export const Divmid = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;




label{
    font-size: 3vh;
    padding: 30px;
}


input{
    margin: 10px;
    padding: 1vh 2vh;
    font-size: 1.8em;
    text-align: center;
    border-radius: 40px;
    border: none;
    background-color: #fff;
    
}

input::placeholder{
    color: #c6ccc8;
    font-size: 1em; 
    text-align: center;

}

button{
    width: 100px;
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 40px;
    transition-duration: 0.4s;
}

button:hover{
    width: 140px;
    background-color:#c6ccc8;
}




`