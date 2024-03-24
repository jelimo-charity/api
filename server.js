import express from 'express';
import config from './src/db/config.js';
import bodyParser from 'body-parser';
import { groceryRoutes } from './src/routes/groceryRoutes.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json())
groceryRoutes(app);

app.get('/', (req, res) => {
    res.send("hello there");
});

app.listen(config.port, () => {
    console.log("The server is running");
});
