import Aplicativo from './components/Aplicativo';
import Cadastro from './components/Cadastro';
import Contato from './components/Contato';
import Funcinalidade from './components/Funcionalidade';
import Header from './components/Header';
import Planos from './components/Planos';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Cadastro />
        <Funcinalidade />
        <Aplicativo />
        <Planos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
