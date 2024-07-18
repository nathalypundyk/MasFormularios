import { useState } from "react";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [contrasenha, setContrasenha] = useState("");
    const [confirmarCon, setConfirmarCon] = useState("");
    const [errores, setErrores] = useState({});

    const enviarFormulario = (e) => {
        e.preventDefault();

        const nuevosErrores = {};
        if (nombre.length < 2) nuevosErrores.nombre = "El nombre debe tener al menos 2 caracteres.";
        if (apellido.length < 2) nuevosErrores.apellido = "El apellido debe tener al menos 2 caracteres.";
        if (email.length < 5) nuevosErrores.email = "El correo electrónico debe tener al menos 5 caracteres.";
        if (contrasenha !== confirmarCon) {
            nuevosErrores.contrasenha = "Las contraseñas no coinciden.";
            nuevosErrores.confirmarCon = "Las contraseñas no coinciden.";
        }
        if (contrasenha.length < 8 || confirmarCon.length < 8) {
            nuevosErrores.contrasenha = "La contraseña debe tener al menos 8 caracteres.";
            nuevosErrores.confirmarCon = "La contraseña debe tener al menos 8 caracteres.";
        }

        if (Object.keys(nuevosErrores).length === 0) {
            const nuevo = { nombre, apellido, email, contrasenha, confirmarCon };
            props.actualizarLista(nuevo);
            setNombre("");
            setApellido("");
            setEmail("");
            setContrasenha("");
            setConfirmarCon("");
        }

        setErrores(nuevosErrores);
    }

    return (
        <>
            <h2>Agregar nuevo usuario</h2>
            <form onSubmit={enviarFormulario}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                </div>
                <div>
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    {errores.apellido && <p style={{ color: 'red' }}>{errores.apellido}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
                </div>
                <div>
                    <label htmlFor="contrasenha">Contraseña:</label>
                    <input type="password" id="contrasenha" name="contrasenha" value={contrasenha} onChange={(e) => setContrasenha(e.target.value)} />
                    {errores.contrasenha && <p style={{ color: 'red' }}>{errores.contrasenha}</p>}
                </div>
                <div>
                    <label htmlFor="confirmarCon">Confirmar Contraseña:</label>
                    <input type="password" id="confirmarCon" name="confirmarCon" value={confirmarCon} onChange={(e) => setConfirmarCon(e.target.value)} />
                    {errores.confirmarCon && <p style={{ color: 'red' }}>{errores.confirmarCon}</p>}
                </div>
                <button type="submit">Agregar</button>
            </form>
        </>
    );
}

export default Formulario;
