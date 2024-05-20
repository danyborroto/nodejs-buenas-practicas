const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const v1Router = require('./v1/routes/index');

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})