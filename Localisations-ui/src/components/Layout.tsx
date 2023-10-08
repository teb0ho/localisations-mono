import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="w-[800px] m-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
