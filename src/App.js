import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';

function App() {
  return (
    <section className='container text-center my-5'>
      <article className='d-flex flex-column align-items-center'>
        <img src={process.env.PUBLIC_URL + 'logo.png'} alt="Logo de los simpsons" className='w-75 mb-5'/> 
        {/* process.env(ambiente en donde esta).PUBLIC_URL es para utilizar imagenes que están en una carpeta pública */}
        <Button variant="warning" className='w-75 text-secondary mb-5'>Obtener Frase</Button>
      </article>
      <Frase />
    </section>
  );
}

export default App;
// get = pedir datos a una api, devuelve lista de datos o un solo dato
// post = agregar datos (elemento, usuario) a una api
// put = modificar un dato a una api
// patch = es parecido a un put
// DELATE = eliminar un dato a una api