import './App.css'
import Contato from './Components/Contato'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projetos from './Components/Projetos'
import Sobre from './Components/Sobre'
import Tecnologias from './Components/Tecnologias'



function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sobre/>
      <Tecnologias/>
      <Projetos/>
      <Contato/>
    </div>
  )
}

export default App
