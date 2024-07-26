//color.js
//ESM 모듈
import express from "express";
import randomColor from "randomcolor";


const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    const color = randomColor();//무작위 색상 추출
    res.send(`<h1 style="color: ${color};">welcome to the home page</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});