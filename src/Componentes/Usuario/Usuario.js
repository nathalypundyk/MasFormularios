const Usuario = (props) => {

    const eliminarUsuario = () => {
        props.eliminarUsuarioDeLaLista(props.nombre, props.apellido);
    }

    return(
        <>
            <h3> Nombre: {props.nombre} {props.apellido} </h3>
            <p> Email: {props.email} </p>
            <p> Contrasenha: {props.contrasenha} </p>
            <p> Confirmar Contrasenha: {props.confirmarCon} </p>
            <button onClick={eliminarUsuario}> Eliminar </button>
        </>
    );
}

export default Usuario;