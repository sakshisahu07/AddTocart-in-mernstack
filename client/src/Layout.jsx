import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Topmenu from "../components/Topmenu";
import Header from "../components/Header";

const Layout=()=>{
    return(
      <>
     <Header/>
      <Topmenu/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  export default Layout;