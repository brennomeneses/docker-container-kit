import Express from 'express';

const app = Express();

const PORT = 3003;

app.get("/", (req, res)=>{
    res.json({hello: "world"});
})

app.listen(PORT, ()=>{
    console.log(`Server Runing on: https://localhost:${PORT}`);
})