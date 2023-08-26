import express from "express"
import conn from "../db.js"

const router = express.Router();

<<<<<<< HEAD
=======
//simpan semua 
// router.post("/all",async(_req,res)=> {
//     for await (const recipe of recipes){
//         const prepare = await conn.prepare (
//             "INSERT INTO recipes (title,description,intruction,cooking_time,servings,image,category_id) VALUES (?, ?, ?, ?, ?, ?, ?)"
//         );
//         await prepare.execute([recipe.title, recipe.description, recipe.intruction, recipe.cooking_time, recipe.servings, recipe.image, recipe.category_id]);
//     }
//     res.send("Semua recipe berhasil disimpan.");
// });
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8

// tampilkan semua 
router.get("/",async(_req,res)=> {
    const recipes =await conn.query("SELECT * FROM recipes");
    res.json(recipes);
});

// tampilkan berdasarkan id
router.get("/:id",async (req,res)=> {
    const prepare = await conn.prepare("SELECT * FROM recipes WHERE id = ?");
    const recipe = (await prepare.execute([req.params.id]))[0];
    res.json(recipe);
});

// tambah
router.post("/",async (req,res) => {
    try {
        const prepare = await conn.prepare(
<<<<<<< HEAD
            "INSERT INTO recipes (title,image,description,ingredients,intruction,nutrition_fact,category_id,subcategory_id)VALUES (?, ?, ?, ?, ?, ?, ?,?)"
        );
        await prepare.execute ([
            req.body.title,
            req.body.image,
            req.body.description,
            req.body.ingredients,
            req.body.intruction,
            req.body.nutrition_fact,
            req.body.category_id,
            req.body.subcategory_id
=======
            "INSERT INTO recipes (title,description,intruction,cooking_time,servings,image,category_id) VALUES (?, ?, ?, ?, ?, ?, ?)"
        );
        await prepare.execute ([
            req.body.title,
            req.body.description,
            req.body.intruction,
            req.body.cooking_time,
            req.body.servings,
            req.body.image,
            req.body.category_id,
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
        ]);
        res.send ("Recipe berhasil disimpan.");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//edit
<<<<<<< HEAD
router.put("/:id", async (req, res) => {
    try {
        const recipeId = req.params.id;
        await conn.execute(
            "UPDATE recipes SET title = ?, image = ?, description = ?, ingredients = ?, intruction = ?, nutrition_fact = ?, category_id = ?, subcategory_id = ? WHERE id = ?",
            [
                req.body.title,
                req.body.image,
                req.body.description,
                req.body.ingredients,
                req.body.intruction,
                req.body.nutrition_fact,
                req.body.category_id,
                req.body.subcategory_id,
                recipeId
            ]
        );
        res.send("Recipe berhasil diperbarui");
    } catch (error) {
        res.status(500).json({ error: error.message });
=======
router.put(":/id",async(req,res)=> {
    try {
        const prepare = await conn.prepare(
            "UPDATE recipes SET title= ?, description=?, intruction=?, cooking_time=?, servings=?, image=?, category_id=?"
        );
        await prepare.execute ([
            req.body.title,
            req.body.description,
            req.body.intruction,
            req.body.cooking_time,
            req.body.servings,
            req.body.image,
            req.body.category_id,
        ]);
        res.send("Recipe berhasil disimpan");
    } catch (error) {
        res.status(500);
        res.send(error);
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
    }
});

//hapus berdasarkan id
<<<<<<< HEAD
router.delete("/:id", async (req, res) => {
    try {
        const recipeId = req.params.id;
        const prepare = await conn.prepare("DELETE FROM recipes WHERE id = ?");
        await prepare.execute([recipeId]);
        res.send("Recipe berhasil dihapus");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


=======
router.delete("/id",async (req,res)=> {
    try {
        const prepare = await conn.prepare("DELETE FROM recipes where id = ?");
        await prepare.execute([req.params.id]);
    } catch (error) {
        res.status(500);
        res.send(error); 
    }
});

>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
export default router;