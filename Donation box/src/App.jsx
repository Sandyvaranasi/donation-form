import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../components/Homepage';
import Donate from "../components/Donate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
