import { BrowserRouter} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./components/Contact";
//import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CardSelector from "./components/CardSelector";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
//import Hero from "./components/Hero";
//import NotFound from "./pages/NotFound";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <main className="">
          <BrowserRouter>
          <>
        
          <Layout  path="/layout" component={Layout}>   </Layout>
          <About  path="/about" component={About}></About>
          <CardSelector  path="/cards" component={CardSelector}></CardSelector>
            <Projects />
            <Contact />
            <Footer />
         
          </>
          </BrowserRouter>
        </main>
      </header>
    </div>
    
  );
}

export default App;
