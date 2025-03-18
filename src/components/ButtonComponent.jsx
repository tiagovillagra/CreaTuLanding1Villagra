export default function ButtonComponent(props,color){
    return(
        <>
        <button style={{ backgroundColor: color}}>{props.texto}</button>
        </>
    );
}