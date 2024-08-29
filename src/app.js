 import express from "express"; // importando o framework
 import bodyParser from "body-parser";
import filmeRoutes from "../src/routes/filmeRoutes.js";


 const app = express(); //objeto app recebe o framework

 app.use(bodyParser.json());

 app.use('/', filmeRoutes);

 export default app;
