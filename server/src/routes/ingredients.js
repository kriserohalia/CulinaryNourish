import express from "express"
import conn from "../db.js"

const router = express.Router();


// tampilkan semua 
router.get("/", async (_req, res) => {
    const ingredients = await conn.query("SELECT * FROM ingredients");
    res.json(ingredients);
});

// tampilkan berdasarkan id
router.get("/:id", async (req, res) => {
    const prepare = await conn.prepare("SELECT * FROM ingredients WHERE id = ?");
    const ingredient = (await prepare.execute([req.params.id]))[0];
    res.json(ingredient);
});

// tambah
router.post("/", async (req, res) => {
    try {
        const prepare = await conn.prepare(
<<<<<<< HEAD
            "INSERT INTO ingredients (name) VALUES (?)"
=======
            "INSERT INTO ingredients (name, recipe_id) VALUES (?, ?)"
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
        );
        await prepare.execute([
            req.body.name,
            req.body.description,
        ]);
        res.send("ingredient berhasil disimpan.");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//edit
<<<<<<< HEAD
router.put("/:id", async (req, res) => {
    try {
        const ingredientId = req.params.id;
        const ingredientName = req.body.name;
        await conn.execute(
            "UPDATE ingredients SET name = ? WHERE id = ?",
            [ingredientName, ingredientId]
        );
        res.send("Bahan berhasil diperbarui");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//hapus berdasarkan id
router.delete("/:id", async (req, res) => {
    try {
        const ingredientId = req.params.id;
        const prepare = await conn.prepare("DELETE FROM ingredients WHERE id = ?");
        await prepare.execute([ingredientId]);
        res.send("Bahan berhasil dihapus");
    } catch (error) {
        res.status(500).json({ error: error.message });
=======
router.put(":/id", async (req, res) => {
    try {
        const prepare = await conn.prepare(
            "UPDATE ingredients SET name= ?, recipe=? WHERE id=?"
        );
        await prepare.execute([
            req.body.name,
            req.body.description,
        ]);
        res.send("ingredient berhasil disimpan");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//hapus berdasarkan id
router.delete("/id", async (req, res) => {
    try {
        const prepare = await conn.prepare("DELETE FROM ingredients where id = ?");
        await prepare.execute([req.params.id]);
    } catch (error) {
        res.status(500);
        res.send(error);
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
    }
});

export default router;