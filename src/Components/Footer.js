import { Divlinks } from "../Styles/Footerstyle";
import Email from "../img/e-mail.png"
import Face from "../img/facebook.png"
import Insta from "../img/instagram.png"
import Twitter from "../img/twitter.png"

export function Footer() {
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