import express from "express";
import cors from "cors";
import "dotenv/config";
import categoriesRouter from "./routes/categories.js";
import recipesRouter from "./routes/recipes.js";
import ingredientsRouter from "./routes/ingredients.js";
<<<<<<< HEAD
import subCategoryRouter from "./routes/subcategories.js"
// import jwt from "jsonwebtoken";
=======
import jwt from "jsonwebtoken";
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8

export const app = express();

// middlewares 
app.use(cors({origin : "http://localhost:5173"}));
app.use(express.json());

//buat route
const router = express.Router();

<<<<<<< HEAD
// router.post("/login", async (req, res) => {
//     const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
//     const user = (await prepare.execute([req.body.email]))[0];
//     if (user) {
//         if (req.body.password === user.password) {
//             res.json({
//                 token: jwt.sign(user, process.env.SECRET_KEY),
//                 user,
//             });
//         } else {
//             res.status(401);
//             res.send("Kata sandi salah.");
//         }
//     } else {
//         res.status(401);
//         res.send("Pengguna tidak ditemukan.");
//     }
// });


// middleware otentikasi
// router.use((req, res, next) => {
//     if (req.headers.authorization) {
//         const token = req.headers.authorization.split(" ")[1];
//         try {
//             const user = jwt.verify(token, process.env.SECRET_KEY);
//             req.user = user;
//             next();
//         } catch {
//             res.status(401);
//             res.send("Token salah.");
//         }
//     } else {
//         res.status(401);
//         res.send("Token belum diisi.");
//     }
// });


// router.get("/me",(req,res)=> {
//     res.json(req.user);
// });
=======
router.post("/login", async (req, res) => {
    const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
    const user = (await prepare.execute([req.body.email]))[0];
    if (user) {
        if (req.body.password === user.password) {
            res.json({
                token: jwt.sign(user, process.env.SECRET_KEY),
                user,
            });
        } else {
            res.status(401);
            res.send("Kata sandi salah.");
        }
    } else {
        res.status(401);
        res.send("Pengguna tidak ditemukan.");
    }
});


// middleware otentikasi
router.use((req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const user = jwt.verify(token, process.env.SECRET_KEY);
            req.user = user;
            next();
        } catch {
            res.status(401);
            res.send("Token salah.");
        }
    } else {
        res.status(401);
        res.send("Token belum diisi.");
    }
});


router.get("/me",(req,res)=> {
    res.json(req.user);
});
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8

router.use("/category",categoriesRouter);
router.use("/recipe",recipesRouter);
router.use("/ingredient",ingredientsRouter);
<<<<<<< HEAD
router.use("/subcategory",subCategoryRouter);
=======
>>>>>>> f43e915bb174099d96f176136e1d5a2d6929b6e8

app.use("/api",router);

app.listen(3000, ()=> console.log("server berhasil dijalankan di port 3000"));