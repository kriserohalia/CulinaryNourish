// import express from "express";
// import conn from "../db.js";
// import jwt from "bcryptjs";
// import authMiddleware from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/login",async(req,res)=> {
//     const prepare = await conn.prepare("SELECT * FROM users WHERE email = ? ");
//     const user = (await prepare.execute([req.body.email]))[0];
//     if (user) {
//         if (await bcrypt.compare(re.body.password,user.password)){
//             const token = jwt.sign(user,process.env.SECRET_KEY);
//             res.cookie("jwt",token,{
//                 httpOnly:true,

//             })
//             .send("Login berhasil.");
//         }else {
//             res.status(401).send("Kata sandi salah.");
//         }
//     }else {
//         res.status(401).send("pengguna tidak ditemukan.");
//     }
// });

// router.use(authMiddleware);

// router.get("/galery",(req,res)=> {
//     res.json(req.user);
// });

// router.post("/logout",(_req,res)=> {
//     res.clearCookie("jwt").send("logout berhasil");
// });

// export default router;