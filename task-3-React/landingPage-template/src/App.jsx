import './App.css'
import Componentfour from './Home/Componentfour'
import Components from './Home/Components'
// import Component from './Home/components/Component'
import ComponentSecond from './Home/ComponentSecond'
import Componentthree from './Home/Componentthree'
import Footer from './Home/Footer'
import Header from './Home/Header'
import Hero from './Home/Hero'
import Navbar from './Home/Navbar'

function App() {

  return (
    <>
      <Header />
      < Navbar />
      < Hero />
      {/* < Component /> */}
      < Components />
      < ComponentSecond />
      < Componentthree />
      < Componentfour />
      < Footer />
    </>
  )
}

export default App
