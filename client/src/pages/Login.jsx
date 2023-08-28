// import { useState } from "react"
// import { Navigate, useOutletContext, Link } from "react-router-dom";
// import { api } from "../utils.js";
// import {RxAvatar} from "react-icons/rx"

// export default function Login(){

//     const[login,setLogin] = useState({
//         email:"",
//         password:"",
//     });
//     const [user,setUser] = useOutletContext();

//     if (user) {
//         return<Navigate to="/"/>
//     }else {
//         return (
//             <main className="flex grow overflow-y-auto m-5">
//               <form
//                 className="m-auto bg-gray-200 p-8 rounded-3xl w-96 flex flex-col gap-4"
//                 onSubmit={async (e) => {
//                   e.preventDefault();
//                   const response = await api.post("/auth/login", login);
//                   if (response.ok) {
//                     const response = await api.get("/");
//                     if (response.ok) {
//                       const user = await response.json();
//                       setUser(user);
//                     }
//                   } else {
//                     const message = await response.text();
//                     alert(message);
//                   }
//                 }}
//               >
//                 <h1 className="text-center text-2xl font-bold flex justify-center"><RxAvatar size={34} /></h1>
//                 <input
//                   type="email"
//                   label="Email"
//                   className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
//                   required
//                   autoFocus
//                   onChange={(e) => setLogin({ ...login, email: e.target.value })}
//                 />
//                 <input
//                   type="password"
//                   label="Kata sandi"
//                   className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
//                   required
//                   onChange={(e) => setLogin({ ...login, password: e.target.value })}
//                 />
//                 <div className="flex justify-between">
//                 <Link to="/register">
//                   <button type="button" className="bg-blue-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded grid justify-center">Buat akun</button>
//                   </Link>
//                   <button className="bg-green-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded grid justify-center">Login</button>
//                 </div>
//               </form>
//               </main>
//           );
//     }
    
// }