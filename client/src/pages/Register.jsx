export default function Register(){
    return (
        <main className="flex grow overflow-y-auto ">
        <form
          className="m-auto bg-gray-200 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await api.post("/auth/login", login);
            if (response.ok) {
              const response = await api.get("/");
              if (response.ok) {
                const user = await response.json();
                setUser(user);
              }
            } else {
              const message = await response.text();
              alert(message);
            }
          }}
        >
          <h1 className="text-center text-2xl font-bold flex justify-center">Register</h1>
          <label> <span className="font-bold">Name: </span>
          <input
            type="text"
            label="Email"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
            required
            autoFocus
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          </label>
          <label><span className="font-bold">Email: </span>
          <input
            type="email"
            label="Email"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          </label>
          <label> <span className="font-bold">Password: </span>
          <input
            type="password"
            label="Kata sandi"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focu s:outline-none"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          </label>
          <div className="flex justify-between">
            <button className="bg-green-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded grid justify-center">Simpan</button>
          </div>
        </form>
      </main>
    )
}