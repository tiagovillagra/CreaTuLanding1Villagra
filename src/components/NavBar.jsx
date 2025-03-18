import ButtonComponent from "./ButtonComponent"
import "./NavBar.css" 
export default function NavBar(){
    return(
    <nav>
        <div>
    <ButtonComponent texto="inicio"/>
    <ButtonComponent texto="Productos" />
    <ButtonComponent texto="Carrito" />
    <ButtonComponent texto="🛒"/>
        </div>
    </nav>
    );
}