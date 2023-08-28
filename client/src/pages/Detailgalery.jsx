import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils";

export default function Detailgalery() {
    const [galeri, setGaleri] = useState();
    const { id } = useParams();

    useEffect(() => {
        api.get(`/galery/${id}`)
            .then(response => response.json())
            .then(galeriData => setGaleri(galeriData));
    }, [id]);

    return (
        <main className="container mx-auto px-4 py-8">
            {galeri ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className=" flex text-3xl font-bold mb-4 justify-center">{galeri.title}</h1>
                    <div className="container mx-auto flex gap-4">
                     <img
                        src={galeri.image}
                        alt="photo resep"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg mb-4"
                    />
                    <div className="container mt-2  bg-yellow-100 p-6 rounded">
                    <p className="text-gray-700 bold">  <span className="font-bold text-2xl">Description:</span> {galeri.description}</p>
                    <div className="contanier grid  gap-3 mt-4"><p className="text-gray-700 bold"><span className="font-bold">Prep Time:</span>: {galeri.prep_time}</p>
                    <p className="text-gray-700 bold"><span className="font-bold">Cook Time:</span> {galeri.cook_time}</p>
                    <p className="text-gray-700 bold"><span className="font-bold">Servings:</span> {galeri.servings}</p></div>
                    </div>
                    </div>
                    <div className="container bg-gray-300 p-3 mt-2 rounded"><h2 className="text-2xl font-medium mt-4">Ingredients</h2>
                    <ul className="list-disc pl-6 mt-2 ">
                        {JSON.parse(galeri.ingredients).map((ingredient, index) => (
                            <li key={index} className="text-gray-700 text-lg ">{ingredient.c} {ingredient.n}</li>
                        ))}
                    </ul></div>
                    
                    <h2 className="text-2xl font-medium mt-4 ">Instructions</h2>
                    <ol className="list-decimal pl-6 mt-2 font-bold">
                        {JSON.parse(galeri.intruction).map((step, index) => (
                            <li key={index} className="text-gray-700 bg-pink-100 p-3 rounded mt-3 ">{step.instruction}</li>
                        ))}
                    </ol>
                    <p className="text-gray-700 mt-4 font-bold bg-green-300 p-3 rounded"><span className="text-2xl m-2">Fakta Gizi:</span>{galeri.nutrition_fact}</p>
                </div>
            ) : (
                <p>Loading....</p>
            )}
        </main>
    );
}
