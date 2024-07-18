import './App.css';
import Formulario from '../Formulario/Formulario';
import Usuario from '../Usuario/Usuario';
import { useState } from 'react';

function App() {
  const usuariosIniciales = [{
    nombre: "Alex",
    apellido: "Miller",
    email: "alexm@gmail.com",
    contrasenha: "contrasenha",
    confirmarCon: "contrasenha"
  }];

  const [listaUsuarios, setListaUsuarios] = useState(usuariosIniciales);

  const actualizarLista = (nuevo) => {
    setListaUsuarios([...listaUsuarios, nuevo]);
  }
  
  const eliminarUsuarioDeLaLista = (nombre, apellido) => {
    const listaTemporal = [...listaUsuarios];
    for(let i = 0; i < listaTemporal.length; i ++){
      if(listaTemporal[i].nombre === nombre && listaTemporal[i].apellido === apellido){
        listaTemporal.splice(i, 1);
      }
    }
    setListaUsuarios(listaTemporal);
  }

  return (
    <div className="App">
      <Formulario actualizarLista={actualizarLista}/>
      <h2> Lista de Usuarios </h2>
      {
        listaUsuarios.map((usuario) => {
          return (<Usuario nombre={usuario.nombre}
                              apellido={usuario.apellido}
                              email={usuario.email}
                              contrasenha={usuario.contrasenha}
                              confirmarCon={usuario.confirmarCon}
                              eliminarUsuarioDeLaLista={eliminarUsuarioDeLaLista}/>)
        })
      }
    </div>
  );
}

export default App;
