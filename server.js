const express = require('express');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');


const app = express();
const PORT = process.env.PORT || 3003;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server at localhost:${PORT}`);
});
