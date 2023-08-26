import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div>
            <Link to="/recipe">
            <button>tampilkan recipe</button></Link>
        </div>
    )
}