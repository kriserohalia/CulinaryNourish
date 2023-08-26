import express from "express"
import conn from "../db.js"

const router = express.Router();

// tampilkan semua 
router.get("/", async (_req, res) => {
    const categories = await conn.query("SELECT * FROM subcategories");
    res.json(categories);
});

// tampilkan berdasarkan id
router.get("/:id", async (req, res) => {
    const prepare = await conn.prepare("SELECT * FROM subcategories WHERE id = ?");
    const category = (await prepare.execute([req.params.id]))[0];
    res.json(category);
});

// tambah
router.post("/", async (req, res) => {
    try {
        const prepare = await conn.prepare(
            "INSERT INTO subcategories (name,id_category) VALUES (?, ?)"
        );
        await prepare.execute([
            req.body.name,
            req.body.description,
        ]);
        res.send("category berhasil disimpan.");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//edit
router.put(":/id", async (req, res) => {
    try {
        const prepare = await conn.prepare(
            "UPDATE categories SET name= ? id_category=? WHERE id=?"
        );
        await prepare.execute([
            req.body.name,
            req.body.description,
        ]);
        res.send("category berhasil disimpan");
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

//hapus berdasarkan id
router.delete("/id", async (req, res) => {
    try {
        const prepare = await conn.prepare("DELETE FROM categories where id = ?");
        await prepare.execute([req.params.id]);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

export default router;