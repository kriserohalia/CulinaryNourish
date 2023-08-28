import { useState } from "react";
import { useEffect } from "react"
import { api } from "../utils";
import { Link } from "react-router-dom";
import {BiEdit} from "react-icons/bi";
import {AiOutlineDelete} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";

export default function Galery(){
    const[galeries, setGaleries]= useState([]);
    const[searchTerm,setSearchTerm]= useState("");
    const[searchResults,setSearchResults]= useState([]);
  
    useEffect(() => {
        api.get("/galery")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Response jaringan tidak berhasil: ${response.status}`);
                }
                return response.json();
            })
            .then((galeries) => setGaleries(galeries))
            .catch((error) => {
                console.error("Kesalahan saat mengambil data:", error);
            });
    }, []);

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            const filteredResults = galeries.filter((galery) =>
                galery.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, galeries]);
    
    return(
        <>
        <main>
        <div className="container flex gap-4 ml-2 mt-3 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mt-1 mx-auto p-3">
        <BsSearch size={32}/>
       <input
            type="text"
            placeholder="cari nama resep..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-4 p-2 rounded border mx-auto flex justify-center  focus:border-gray-500 focus:outline-none"
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((galery) => (
                    <div key={galery.id} className="bg-white rounded-lg shadow-md p-4">
                        <h1 className="text-xl font-semibold mb-2">{galery.title}</h1>
                        <img src={galery.image} alt="photo resep" className="w-full h-auto rounded-lg mb-2" />
                        <Link to={`/galery/${galery.id}`}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Lihat Detail
                            </button>
                        </Link>
                    </div>
                ))}
            {galeries.map((galery)=> (
                <div key={galery.id} className="bg-white rounded-lg shadow-md p-4">
                     <span className="flex flex-end"><Link to={`/${galery.id}/edit`}><BiEdit size={24} /></Link>
                     <button onClick={async () => {
                if (
                  confirm(`Apakah Anda yakin ingin menghapus ${galery.title}?`)
                ) {
                  const response1 = await api.delete(`/galery/${galery.id}`);
                  const message = await response1.text();
                  const response2 = await api.get("/galery");
                  const galeries = await response2.json();
                  setGaleries(galeries);
                  alert(message);
                }
              }}><AiOutlineDelete size={24} />
            </button></span>
                    <h1 className="text-xl font-semibold mb-2 flex justify-center" >{galery.title}</h1>
                    <img src={galery.image} alt="photo resep"  className="w-full h-auto rounded-lg mb-2"/>
                    <Link to={`/galery/${galery.id}`}>
                        <button className="bg-green-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded grid justify-center">Lihat Detail</button>
                    </Link>
                </div>
            ))}

        </div>
        </main>
        </>
    )
}
