import { Express } from "express";
import filmeController from "../controllers/filmeController.js";
const router = express.router();
const filme = new filmeController();

router.get('/', (req,res)=> {
    try{
        filme.buscarTodosOsFilmes(req, res);
    }catch(err){
        res.status(500).json({erro: err.message});
    }
});