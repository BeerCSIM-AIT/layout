import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from './About';


function App() {
  return(
    <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  );
}

export default App;

//  localhost:3000/
// localhost:3000/about