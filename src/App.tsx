import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Footer from "./shared/components/Footer";

function App() {
  return (
    <>
      <div className={`relative w-full bg-gray-100`}>
        <ToastContainer />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
