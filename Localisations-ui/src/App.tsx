import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ManageStrings from "./pages/ManageStrings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="manage-strings" element={<ManageStrings />} />
      </Route>
    </Routes>
  );
}

export default App;
