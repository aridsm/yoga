import './App.css';
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Entrada from './Componentes/Entrada';
import Caracteristicas from './Componentes/Caracteristicas';
import Modalidades from './Componentes/Modalidades';

function App() {
  return (
    <div className='App'>
    <Header />
    <Entrada />
    <Caracteristicas />
    <Modalidades />
    <Footer />
    </div>
  )
}

export default App;
