import { Route, Routes } from "react-router-dom";
import ModalPage from "./pages/ModalPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/modal" element={<ModalPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
