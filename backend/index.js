const app = require("./app");

require("./database");

// starting the server
app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando por el puerto: ${app.get("port")}`);
});