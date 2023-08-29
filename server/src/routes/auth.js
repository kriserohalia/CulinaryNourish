import express from "express";
import conn from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();
router.post("/registrasi", async (req, res) => {
    console.log(req.body);
    const baris = await conn.query(
      `select * from users where email = '${req.body.email}'`
    );
  
    console.log(baris);
    if (baris.length === 1) {
      res.send("Email sudah terdaftar");
    } else {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(req.body.password, salt);
      await conn.query(
        `INSERT INTO users VALUES (default,'${req.body.name}','${req.body.email}',
        '${hash}',${req.body.is_admin})`
      );
      res.send("Berhasil Registrasi");
    }
  });

router.post("/login",async(req,res)=> {
    const prepare = await conn.prepare("SELECT * FROM users WHERE email = ? ");
    const user = (await prepare.execute([req.body.email]))[0];
    if (user) {
        // if(req.body.password === user.password ){
        if (await bcrypt.compare(req.body.password,user.password)){
            console.log("apa?");
            const token = jwt.sign(user,process.env.SECRET_KEY);
            res.cookie("jwt",token,{
                httpOnly:true,

            })
            .send("Login berhasil.");
        }else {
            res.status(401).send("Kata sandi salah.");
        }
    }else {
        res.status(401).send("pengguna tidak ditemukan.");
    }
});

router.use(authMiddleware);

router.get("/me", (req, res) => {
    res.json(req.user);
  });
  

router.get("/galery",(req,res)=> {
    res.json(req.user);
});

router.post("/logout",(_req,res)=> {
    res.clearCookie("jwt").send("logout berhasil");
});

export default router;