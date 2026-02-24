import express from "express"
import path from "path"

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

