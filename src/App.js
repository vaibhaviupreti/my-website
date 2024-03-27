import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import './App.css';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route element={<HomePage/>} path="/" />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
