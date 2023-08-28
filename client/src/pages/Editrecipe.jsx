import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import {api} from "../utils.js"


export default function EditRecipe(){
     const[galery,setGalery]= useState();
     const{id}= useParams();
     const navigate= useNavigate();

     useEffect(()=> {
        api.get(`/galery/${id}`).then((response)=>response.json()).then((galery)=> setGalery(galery));
     },[id]);
     
    return(
        <main>
            {galery ? (
                <form 
                onSubmit={async (e) => {
                    e.preventDefault();
                    const message = await api(`/galery/${galery.id}`, "PUT", galery);
                    alert(message);
                    navigate("/");
                }}>
                    <h1>Edit Recipe</h1>
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

                <label className="block">
                    INgredients:
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
                        value={galery.introduction}
                        onChange={(e) => setGalery({...galery,introduction : e.target.value})}
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
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Save
                </button>
            </form>

            ): (
                "Loading..."
            )}
        </main>
    );
}