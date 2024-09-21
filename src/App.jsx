
// import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";
import BgChanger from "./Components/bgchanger/BgChanger"
import Todos from "./Components/todolist/Todos"
import Home from "./Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home></Home>}
          />
          <Route path="/bgChanger" element={<BgChanger />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
