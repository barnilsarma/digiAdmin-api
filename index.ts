import express from "express";
import cors from "cors";
import dotEnv from  "dotenv";

dotEnv.config();
const app=express();
app.use(express.json());
app.use(cors({origin:true}));

app.listen(process.env.PORT,()=>{
    console.log(`Server running at port ${process.env.PORT}`);
});
