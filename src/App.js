import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';
import React, {useState, useEffect} from 'react';
import Spinner from './components/Spinner';

function App() {
  // Crear los state adecuados
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  // ciclo de vida
  useEffect(()=> {
    // Aqui va la logica
    consultaAPI();
  },[]);

  const consultaAPI = async() => {
    // Aqui quiero mostrar el spinner
    setCargando(true);
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const result = await respuesta.json();
    console.log(result[0]);
    setTimeout(() => {
       // guardar el resultado de mi consulta en el state
      setPersonaje(result[0]);
      // Quiero mostrar el componente frase
      setCargando(false);
    }, 2000);
  };
  // operador ternario (funciona como un if) tengo que poner si o si las dos condiciones
  // (condicion logica) ? (que pasa si la condición se cumple) : (que pasa si la condición no se cumple)
  const mostrarComponente = (cargando) ? (<Spinner/>) : (<Frase propiedadPersonaje = {personaje}/>);

  return (
    <section className='container text-center my-5'>
      <article className='d-flex flex-column align-items-center'>
        <img src={process.env.PUBLIC_URL + 'logo.png'} alt="Logo de los simpsons" className='w-75 mb-5'/> 
        {/* process.env(ambiente en donde esta).PUBLIC_URL es para utilizar imagenes que están en una carpeta pública */}
        <Button variant="warning" className='w-75 text-secondary mb-5' onClick={() => consultaAPI()}>Obtener Frase</Button>
      </article>
      {mostrarComponente}
    </section>
  );
}

export default App;
// get = pedir datos a una api, devuelve lista de datos o un solo dato
// post = agregar datos (elemento, usuario) a una api
// put = modificar un dato a una api
// patch = es parecido a un put
// DELATE = eliminar un dato a una api