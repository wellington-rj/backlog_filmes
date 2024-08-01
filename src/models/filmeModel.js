import { DataTypes } from "sequelize"; 
import Sequelize from "../config/dbConfig.js";

const filmeModel = Sequelize.define('Filmes', {
  id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primarykey: true,
        autoIncrement: false
  },
  titulo:{
    type :DataTypes.STRING,
    allowNull: false,
    
  }
  


})