import { useState } from "react";
import { api } from "../utils.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    is_admin: "",
  });
  const navigate = useNavigate()

  const handleRadioChange = (event) => {
    setRegister({ ...register, is_admin: event.target.value === "true" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await api.post("/auth/registrasi", register);
      alert("data berhasil disimpan")
      navigate("/login")
    } catch (error) {
      alert(error)

    }
  };

  return (
    <main className="flex-grow overflow-y-auto" style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/food-seamless-background_118813-4517.jpg")' }}>
      <form
        className="m-auto bg-gray-200 p-8 rounded-3xl w-96 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <label>
          <span className="font-bold">Name: </span>
          <input
            type="text"
            value={register.name}
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
            required
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
        </label>
        
        <label>
          <span className="font-bold">Email: </span>
          <input
            type="email"
            value={register.email}
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
            required
            onChange={(e) => setRegister({ ...register, email: e.target.value })}
          />
        </label>
        
        <label>
          <span className="font-bold">Password: </span>
          <input
            type="password"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
            required
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
          />
        </label>
        
        <fieldset>
          <legend className="font-bold">Is Admin:</legend>
          <label>
            <input
              type="radio"
              name="is_admin"
              value={true}
              className="block gap-3 form-radio text-primary focus:ring-primary mr-2"
              checked={register.is_admin === true}
              onChange={handleRadioChange}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name="is_admin"
              value={false}
              className="block gap-3 form-radio text-primary focus:ring-primary mr-2"
              checked={register.is_admin === false}
              onChange={handleRadioChange}
            />
            False
          </label>
        </fieldset>
        
        <div className="bg-green-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded grid justify-center">
          <button className="btn-primary">Simpan</button>
        </div>
      </form>
    </main>
 
  );
}
