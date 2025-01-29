import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/home/Navbar";
import Footer from "./components/pages/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
