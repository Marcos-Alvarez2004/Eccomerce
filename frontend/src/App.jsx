// REACT-ROUTER-DOM
import { Outlet } from "react-router-dom";
// COMPONENTES
import Navigation from "./pages/Auth/Navigation";
// TOASTIFY
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
