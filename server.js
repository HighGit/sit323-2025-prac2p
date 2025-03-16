const express = require("express");
const path = require('path');

//Add Two Numbers Function
const app = express();
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
};

//Route Handling
app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);

    // Validate input
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ statuscode: 400, message: "Invalid input. Please enter valid numbers." });
    }

    const result = addTwoNumber(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Server setup and listening
const port = 3040;
app.listen(port, () => {
    console.log("hello i'm listening to port " + port);
});
