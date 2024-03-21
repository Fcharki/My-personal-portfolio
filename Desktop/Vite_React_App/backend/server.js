const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const cors = require('cors');

const port = process.env.PORT;
const app = express();
app.use(cors());

//* établir la connexion à la BDD
connectDB();

//* middlware de json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* définir la route principale
app.use("/api/trajets", require("./routes/trajetRoute"));

//* middleware des erreurs
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port : ${port}`));
