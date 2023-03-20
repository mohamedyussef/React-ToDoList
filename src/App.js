import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { Route, Routes, useParams } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/EditProduct/:productID" element={<EditProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
