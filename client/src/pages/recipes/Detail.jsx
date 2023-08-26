import { useEffect, useState } from "react";
import { api } from "../../utils";

export default function RecipeDetail(){
    const[recipe, setRecipe]= useState();
    const {id} = useParam();

    useEffect(()=>{
        api.get(`/recipe/${id}`).then((response)=>response.json()).then((recipe)=> setRecipe(recipe));
    },[id]);

    return (
        <main>
            {recipe ? (
                <>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <p>{recipe.ingredients}</p>
                <p>{recipe.intruction}</p>
                <p>{recipe.nutrition_fact}</p>
                </>
            ):(
                "Loading..."
            )}
        </main>
    );
}