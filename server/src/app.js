import express from "express";
import cors from "cors";
import "dotenv/config";
import categoriesRouter from "./routes/categories.js";
import recipesRouter from "./routes/recipes.js";
import ingredientsRouter from "./routes/ingredients.js";
import subCategoryRouter from "./routes/subcategories.js"
import galeryRouter from "./routes/galeries.js"
// import cookieParser from "cookie-parser";
// import authMiddleware from "./middlewares/auth.js";
// import authRouter from "./routes/auth.js";


export  const app = express()
app.use(cors({
    origin : "http://localhost:5173",methods:"GET,HEAD,PUT,POST,DELETE",credentials:true,}
));
app.use(express.json());
// app.use(cookieParser());

const router = express.Router();

app.use("/api",router);
// router.use("/auth",authRouter);
// router.use(authMiddleware);

router.use("/category",categoriesRouter);
router.use("/recipe",recipesRouter);
router.use("/ingredient",ingredientsRouter);
router.use("/subcategory",subCategoryRouter);
router.use("/galery",galeryRouter);

const port = 3000;
app.listen(port, ()=> console.log(`server berjalan di di http://localhost:${port}.`));
