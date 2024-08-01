 import express from "express"; // importando o framework
 import bodyParser from "body-parser";

 const app = express(); //objeto app recebe o framework

 app.use(bodyParser.json());

 app.use('/', filmeRoutes);

 export default app;
