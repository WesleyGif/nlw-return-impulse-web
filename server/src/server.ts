import express from 'express'
import cors from 'cors'
import { routes } from './routes';

// GET, POST, PUT, PATCH, DEELTE,

const app = express();

//GET = Buscar informações no BD
// POST = Cadastrar informações no DB
// PUT = Atualizar informações de uma identificação 
// PATH = Atualizar uma informação unica de uma entidade 

app.use(cors({
    // origin: 'http://localhost:3000' para travar o frontend
}));
app.use(express.json());
app.use(routes);


  app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server runing!');
});