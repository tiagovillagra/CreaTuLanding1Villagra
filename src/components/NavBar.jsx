import ButtonComponent from "./ButtonComponent"

export default function NavBar(){
    return(
    <nav>
    <ButtonComponent texto="inicio"color="red"/>
    <ButtonComponent texto="Productos" color="blue"/>
    <ButtonComponent texto="Carrito" color="green"/>
    </nav>
    );
}