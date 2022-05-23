import './App.css';
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Entrada from './Componentes/Entrada';
import Caracteristicas from './Componentes/Caracteristicas';
import Modalidades from './Componentes/Modalidades';
import Planos from './Componentes/Planos';
import Frase from './Componentes/Frase';
import Instrutores from './Componentes/Instrutores';

function App() {
  return (
    <div className='App'>
    <Header />
    <Entrada />
    <Caracteristicas />
    <Modalidades />
    <Planos />
    <Frase />
    <Instrutores />
    <Footer />
    </div>
  )
}

export default App;
