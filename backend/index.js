const express = require("express");
const app = express();
const profile = require("./profile")
const cors = require('cors');
app.use(cors());

app.use("/profile", profile);

const port = +process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running in the ${port}`)
})