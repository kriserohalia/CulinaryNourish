import express from "express"
import conn from "../db.js"

const router = express.Router();

// tampilkan semua 
router.get("/",async(_req,res)=> {
    const galeries =await conn.query("SELECT * FROM galeries");
    res.json(galeries);
});

// tampilkan berdasarkan id
router.get("/:id",async (req,res)=> {
    const prepare = await conn.prepare("SELECT * FROM galeries WHERE id = ?");
    const galery = (await prepare.execute([req.params.id]))[0];
    res.json(galery);
});

// tambah
router.post("/",async (req,res) => {
    try {
        const prepare = await conn.prepare(
            "INSERT INTO galeries (title,image,description,prep_time,cook_time,servings,ingredients,intruction,nutrition_fact)VALUES (?, ?, ?, ?, ?, ?,?,?,?)"
        );
        await prepare.execute ([
            req.body.title,
            req.body.image,
            req.body.description,
            req.body.prep_time,
            req.body.cook_time,
            req.body.servings,
            req.body.ingredients,
            req.body.intruction,
            req.body.nutrition_fact,
        ]);
        res.send ("Galery berhasil disimpan.");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//edit
router.put("/:id",async(req,res)=> {
    try {
        const prepare = await conn.prepare(
            "UPDATE galeries SET title= ?, image=?, description=?, prep_time=?, cook_time=?, servings=?, ingredients=?, intruction=?, nutrition_fact=? WHERE id=?"
        );
        await prepare.execute ([
            req.body.title,
            req.body.image,
            req.body.description,
            req.body.prep_time,
            req.body.cook_time,
            req.body.servings,
            req.body.ingredients,
            req.body.intruction,
            req.body.nutrition_fact,
            req.params.id
        ]);
        res.send("Galery berhasil disimpan");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//hapus berdasarkan id
router.delete("/:id", async (req, res) => {
    try {
        const recipeId = req.params.id;
        const prepare = await conn.prepare("DELETE FROM galeries WHERE id = ?");
        await prepare.execute([recipeId]);
        res.send("Galery berhasil dihapus");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;