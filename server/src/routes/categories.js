import express from "express"
import conn from "../db.js"
<<<<<<< HEAD
const router = express.Router();

// tampilkan semua 
router.get("/", async (_req, res) => {
    try {
        const categories = await conn.query("SELECT * FROM categories");
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengambil data." });
    }
  
=======

const router = express.Router();


// tampilkan semua 
router.get("/", async (_req, res) => {
    const categories = await conn.query("SELECT * FROM categories");
    res.json(categories);
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
});

// tampilkan berdasarkan id
router.get("/:id", async (req, res) => {
<<<<<<< HEAD
    try {
        const categoryId = req.params.id;
        const [category] = await conn.execute("SELECT * FROM categories WHERE id = ?", [categoryId]);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: "Kategori tidak ditemukan." });
        }
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengambil data." });
    }
});
=======
    const prepare = await conn.prepare("SELECT * FROM categories WHERE id = ?");
    const category = (await prepare.execute([req.params.id]))[0];
    res.json(category);
});

>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
// tambah
router.post("/", async (req, res) => {
    try {
        const prepare = await conn.prepare(
<<<<<<< HEAD
            "INSERT INTO categories (name) VALUES (?)"
=======
            "INSERT INTO categories (name, description) VALUES (?, ?)"
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
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
<<<<<<< HEAD
router.put("/:id", async (req, res) => {
    try {
        const categoryId = req.params.id;
        const categoryName = req.body.name;
        await conn.execute(
            "UPDATE categories SET name = ? WHERE id = ?",
            [categoryName, categoryId]
        );
        res.json({ id: categoryId, name: categoryName });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat menyimpan data." });
=======
router.put(":/id", async (req, res) => {
    try {
        const prepare = await conn.prepare(
            "UPDATE categories SET name= ?, description=? WHERE id=?"
        );
        await prepare.execute([
            req.body.name,
            req.body.description,
        ]);
        res.send("category berhasil disimpan");
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
        const categoryId = req.params.id;
        await conn.execute("DELETE FROM categories WHERE id = ?", [categoryId]);
        res.json({ message: "Kategori berhasil dihapus." });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat menghapus data." });
    }
});
=======
router.delete("/id", async (req, res) => {
    try {
        const prepare = await conn.prepare("DELETE FROM categories where id = ?");
        await prepare.execute([req.params.id]);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
});

>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8
export default router;