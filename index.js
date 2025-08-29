//console.log('Hello, World!');
//const myModule = require('./my-module.js');
//console.log(myModule);
//const { readFile, readFileSync } = require('fs').promises;
//const express = require('express');
//const app = express();
//app.get('/', async (request, response) => {
        //if (err) {
        //    response.status(500).send("Sorry, out of order")
        //}
//    response.send(await readFile('./home.html', 'utf8'));
//});
//app.listen(process.env.PORT || 3000, () => console.log('App avaliable on http://localehost:3000'))

// ********************************************************************************

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
