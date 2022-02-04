import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePageComponents } from "./components/HomePageComponents";
import { Mintpages } from "./pages/mintpage/Mintpages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponents />} />
          <Route path="/mint" element={<Mintpages />} />
        </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
