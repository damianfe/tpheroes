const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','home.html'))
});
app.get('/babbage', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','babbage.html'))
});
app.get('/berners-lee', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','berners-lee.html'))
});
app.get('/clarke', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','clarke.html'))
});
app.get('/hamilton', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','hamilton.html'))
});
app.get('/hopper', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','hopper.html'))
});
app.get('/lovelace', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','lovelace.html'))
});
app.get('/turing', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','turing.html'))
});

app.get('*',(req,res) => {
    return res.sendFile(path.join(__dirname,'views','notFound.html'))
})


app.listen(port, () => console.log(`Server running on port http://localhost:${port}`))