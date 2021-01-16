const express = require('express');
const app = express();
const HOST = "0.0.0.0";
const PORT = 3000;
app.use(express.static('./dist/stockProject'));
app.get('/login', (req, res) => {
    res.send("Hi Shubham...");
});

app.listen(PORT,HOST,()=>console.log(`Server is Hosted on ${HOST} and using port ${PORT}`));