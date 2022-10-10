const express = require("express");
const {getconnection } = require("./db/db-connection-mongo");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

getconnection();

app.use(express.json());
app.use("/usuario", require ("./router/usuario"));
app.use("/tipoEquipo", require("./router/tipoEquipo"));
app.use("/marca", require("./router/marca"));
app.use("/estadoEquipo", require("./router/estadoEquipo"));
app.use("/inventario", require("./router/inventario"));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)


});
