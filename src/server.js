require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cafeRoutes = require("./routes/cafeRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", cafeRoutes);

app.get("/", (req, res) => {
    res.send("API Café Express");
});

app.listen(PORT, () => {
    console.log(`Server on na  ${PORT}`);
});