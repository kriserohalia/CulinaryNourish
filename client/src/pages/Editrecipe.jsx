import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import {api} from "../utils.js"
import {BiSolidEdit} from "react-icons/bi"


export default function EditRecipe(){
     const[galery,setGalery]= useState();
     const{id}= useParams();
     const navigate= useNavigate();


     useEffect(()=> {
        api.get(`/galery/${id}`)
        .then((response)=>response.json())
        .then((galery)=> setGalery(galery));
     },[id]);

     console.log(galery);
    return(
        <main>
            {galery ? (
                <div className="container max-w-md mx-auto m-10 bg-gray-300 p-3 rounded w-full" > 
                <form 
                onSubmit={async (e) => {
                    e.preventDefault();
                    const message = await api(`/galery/${galery.id}`, "PUT", galery);
                    alert(message);
                    navigate("/");
                }}>
                    <span className=" flex items-center">
                    <h1 className="text-2xl font-semibold mb-4 mt-10" ><BiSolidEdit size={36}/>Edit Recipe</h1></span>
                    <label className="block">
                    Title:
                    <input 
                        type="text"
                        value={galery.title}
                        onChange={(e) => setGalery({...galery,title  : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Image:
                    <input
                        type="text"
                        value={galery.image}
                        onChange={(e) => setGalery({...galery,image  : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Description:
                    <input
                        type="text"
                        value={galery.description}
                        onChange={(e) => setGalery({...galery,description : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>
                <div className="container flex gap-2 ">
                <label className="block">
                    Prep time:
                    <input
                        type="text"
                        value={galery.prep_time}
                        onChange={(e) => setGalery({...galery,prep_time: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Cook time:
                    <input
                        type="text"
                        value={galery.cook_time}
                        onChange={(e) => setGalery({...galery,cook_time: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Serving:
                    <input
                        type="text"
                        value={galery.servings}
                        onChange={(e) => setGalery({...galery,servings : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>
                </div>

                <label className="block">
                    Igredients:
                    <input
                        type="text"
                        value={galery.ingredients}
                        onChange={(e) => setGalery({...galery,ingredients: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Intruction:
                    <input
                        type="text"
                        value={galery.intruction}
                        onChange={(e) => setGalery({...galery,intruction : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Nutrition_fact:
                    <input
                        type="text"
                        value={galery.nutrition_fact}
                        onChange={(e) => setGalery({...galery,nutrition_fact  : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex mt-4"
                    onClick={async () => {
                        if (
                            window.confirm(`Apakah data resep sudah benar?`)
                        ) {
                            const response = await api.put(`/galery/${galery.id}`, galery);
                            const message = await response.text();
                            alert(message);
                         
                        }
                    }}
                >
                    Save
                </button>
                


            </form>
            </div>

            ): (
                "Loading..."
            )}
        </main>
    );
}