

import { Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";


function App() {

  


  return (
    <>
    <NavMenu />

    <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:category" element={<Categories />} />
      
      

      </Routes>

      
    
    </>
  )
 
}

export default App;