import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoute.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({origin: "https://contact-keeper-frontend-f0wo.onrender.com/"}));
app.use(express.json());
app.use("/api", clientRoutes)
app.get("/", (req, res) => {
    res.status(200).send("All is ok!");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});