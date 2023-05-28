import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginBox from "./Logueo";
import Box from "./Box";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginBox />}></Route>
        <Route path="/pagprincipal" element={<Box />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
