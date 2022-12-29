const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 17780;
app.use(express.json());
app.all('*', (req, res) => {
    console.log(req.header, req.method, req.url, req.body)
    res.json({ message: "Hello from server!" });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
