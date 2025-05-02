import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home"
import About from "./component/About";
import Post from "./component/Post";
import Contact from "./component/Contact";
import "./App.css"
import { Route, Routes} from "react-router-dom";
function App(){
  return(
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      
     </Routes>
    <Footer/>


    </>
  )
}
export default App;