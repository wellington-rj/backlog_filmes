//import { json } from "body-parser";
import filmeModel from "../models/filmeModel.js";

export default class Filmes{
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);

        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }

    async BuscarFilmePorId(req, res){
        try{
            const filmeEncontrado = await filmeModel.findByPk(req.params.id);
            if(!filmeEncontrado){
                return res.status(404).json({erro: "Filme não encontrado"});
            }
            return res.json(filmeEncontrado);
        }

        catch(err){
            res.status(500).json({erro: err.message});
        }

    }



    async CadastrarFilme(req, res){
        try{
            const filmeCadastro = await filmeModel.create(req.body);
            res.json({message: 'Filme cadastrado com sucesso!!', filmeCadastro});
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }

} 
