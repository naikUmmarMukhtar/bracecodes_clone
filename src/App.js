import BraceCodes from "../src/components/bracecodes/BraceCodes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./components/bracecodes/Projects/Work";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BraceCodes />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
