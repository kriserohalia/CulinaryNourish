
import Headers from "./components/Headers"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import { api } from "./utils.js";
// import Login from "./pages/Login";

export default function App(){
  // const [user,setUser] = useState();

  return(
  //   <>
  // <header>
  //   {user ? (
  //     <div>
  //       <div>{user.name}</div>
  //       <button onClick={async()=> {
  //         const response= await api.post("/auth/logout");
  //         if(response.ok){
  //           setUser();
  //         }
  //         }}>logout</button>
  //     </div>
  //   ): (
  //     <Link to="/galery">
  //       <button></button>
  //     </Link>
  //   )
      
  //   }
  // </header>
  // <Outlet context={[user,setUser]}/>

  //   </>
  <>
  <Headers/>
  <Outlet/>
  <Footer/>
  </>
  );
  
}