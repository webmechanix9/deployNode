const express = require('express');
const app = express();
const HOST = "0.0.0.0";
const PORT = 3000;
app.use(express.static('./dist/login'));
app.get('/login', (req, res) => {
    res.sendFile(require('./dist/'));
});

app.listen(PORT,HOST,()=>console.log(`Server is Hosted on ${HOST} and using port ${PORT}`));