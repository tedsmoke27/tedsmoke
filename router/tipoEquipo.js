const { Router } = require("express");
const TipoEquipo = require("../models/TipoEquipo");
const router = Router();



router.post("/", async function (req, res) {
    try {
        let = tipoEquipo = new TipoEquipo();
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date();
        tipoEquipo = await tipoEquipo.save();
        res.status(400).send(tipoEquipo)
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error");
    }
});

router.get("/", async function (req, res) {
    try {
        const tipos = await TipoEquipo.find();
        res.status(500).send(tipos);

    } catch (error) {
        console.log(error);
        res.status(400).send("ocurrio un error");
   }
});

router.put("/:tipoEquipoid", async function (req, res) {
    try {
        let = tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoid);

        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaActualizacion = new Date();
        tipoEquipo = await tipoEquipo.save();
        res.status(400).send(tipoEquipo)
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error");
    }
});

module.exports = router;