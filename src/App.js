import './App.css';
import Navbar from './Component/1 Navbar/Navbar';
import Home from './Component/2 Home/Home';
import Property from './Component/3 Property/Property';
import Services from './Component/4 Services/Services';
import WorkPage from './Component/5 WorkPage/WorkPage';
import Accordion from './Component/6 Accordion/Accordion';
import Counter from './Component/7 Counter/Counter';
import Agent from './Component/8 Agent/Agent';
import Footer from './Component/9 Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Property />
      <Services />
      <WorkPage />
      <Accordion/>
      <Counter/>
      <Agent/>
      <Footer/>
    </>
  );
}

export default App;