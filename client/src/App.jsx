
// import Headers from "./components/Headers"
// import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "./utils.js";

export default function App(){
  const [user,setUser] = useState();

  useEffect(() => {
    api
      .get("/auth/me")
      .then((me) => {
        if (!me) {
          console.log("sss");
          setUser(null);
        } else {
          console.log("aaaa");
          setUser(me);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.id]);

  return(

  <>
  {/* <Headers/> */}
  <Outlet context={[user, setUser]}/>
  {/* <Footer/> */}
  </>
  );
  
}