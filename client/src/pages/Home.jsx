import { Navigate, useOutletContext } from "react-router-dom";
import Galery from "./Galery";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

export default function Home() {
  const [user, setUser] = useOutletContext();
  console.log(user)
  if (!user) {
    return <Navigate to="/login" />;
    console.log("sss");
  } else {
    return (
      <div>
        <Headers/>
        <Galery />
        <Footer/>
      </div>
    );
  }
}
