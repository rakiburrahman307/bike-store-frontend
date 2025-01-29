import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/home/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default App;
