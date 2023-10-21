import express from "express";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'))

app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).sendFile('index.html')
});

app.listen(port, () => {
    console.log(`App is runiing on Port ${port}`);
});