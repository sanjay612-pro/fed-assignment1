import Home from "./pages/home";
import Contact from "./components/Contact";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
       </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
