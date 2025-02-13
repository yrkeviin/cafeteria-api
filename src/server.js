require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cafeRoutes = require("./routes/cafeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/cafes", cafeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server on na ${PORT}!`);
});