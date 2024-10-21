const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cupcakeRoutes = require('./routes/cupcakeRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());


app.use('/cupcake', cupcakeRoutes);


app.use(errorHandler);


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Cupcake Store API is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
