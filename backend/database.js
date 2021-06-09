const mongoose = require("mongoose");

// const URI = "mongodb://localhost/ropa";
const URI = "mongodb+srv://admin:admin@cluster0.65ax2.mongodb.net/ropa";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("Base de datos en linea"))
  .catch((err) => console.error(err));

module.exports = mongoose;