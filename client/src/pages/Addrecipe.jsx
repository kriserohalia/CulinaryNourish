import { useState } from "react";
import { api } from "../utils";
import {AiOutlineFileAdd} from "react-icons/ai"

export default function AddRecipe() {
    const[newRecipe,setNewRecipe]=useState({});

    return (
        <div className=" container max-w-md mx-auto m-10 bg-gray-300 p-5 rounded ">
            <span className=" flex items-center">
            <h2 className="text-2xl font-semibold mb-4 mt-10"> <AiOutlineFileAdd size={36}/> Tambah Resep Baru</h2></span>
            <form onSubmit={async (e)=> {
            e.preventDefault();
            setNewRecipe({});
            const response1 = await api.post("/galery",newRecipe);
            const message = await response1.text();
            const response2 = await api.get("/galery");
            const galeries = await response2.json();
            setNewRecipe(galeries);
            alert(message);
        }} className="space-y-4">
                <label className="block">
                    Title:
                    <input
                        type="text"
                        value={newRecipe.title ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,title: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Image:
                    <input
                        type="text"
                        value={newRecipe.image ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,image: e.target.value})}
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Description:
                    <input
                        type="text"
                        value={newRecipe.description ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,description: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>
                <div className="container flex gap-2 ">
                <label className="block">
                    Prep time:
                    <input
                        type="text"
                        value={newRecipe.prep_time ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,prep_time: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block">
                    Cook time:
                    <input
                        type="text"
                        value={newRecipe.cook_time ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,cook_time: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>
                <label className="block">
                    serving:
                    <input
                        type="text"
                        value={newRecipe.servings ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,servings: e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>
                </div>
                

                <label className="block">
                    ingredients:
                    <input
    type="text"
    value={newRecipe.ingredients ? newRecipe.ingredients.map(ing => `${ing.n} - ${ing.c}`).join(', ') : ""}
    onChange={(e) => {
        const inputValue = e.target.value;
        // Split input value into array of ingredients
        const ingredientArray = inputValue.split(',').map(item => {
            const [n, c] = item.split('-').map(part => part.trim());
            return { n, c };
        });
        // Update newRecipe state with the parsed ingredientArray
        setNewRecipe({ ...newRecipe, ingredients: ingredientArray });
    }}
    required
    className="w-full p-2 border rounded"
/>

                </label>

                <label className="block">
                    Intruction:
                    <input
    type="text"
    value={newRecipe.instruction ? newRecipe.instruction.map(step => `${step.step}: ${step.instruction}`).join(', ') : ""}
    onChange={(e) => {
        const inputValue = e.target.value;
        // Split input value into array of instructions
        const instructionArray = inputValue.split(',').map(item => {
            const [stepStr, instruction] = item.split(':').map(part => part.trim());
            const step = parseInt(stepStr);
            return { step, instruction };
        });
        // Update newRecipe state with the parsed instructionArray
        setNewRecipe({ ...newRecipe, instruction: instructionArray });
    }}
    required
    className="w-full p-2 border rounded"
/>

                </label>

                <label className="block">
                    Nutrition_fact:
                    <input
                        type="text"
                        value={newRecipe.nutrition_fact ?? ""}
                        onChange={(e) => setNewRecipe({...newRecipe,nutrition_fact  : e.target.value})}
                        required
                        className="w-full p-2 border rounded"
                    />
                </label>

                <button
                    type="submit"
                    className="bg-red-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Tambah Resep
                </button>
            </form>
        </div>
    );
}
