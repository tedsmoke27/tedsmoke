const { request } = require("express");
const { Router } = require("express");
const EstadoEquipo = require("../models/Estado-Equipo");
const router = Router();



router.post("/", async function (req, res) {
    try {
        let estadoEquipo = new EstadoEquipo();
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion = new Date();
        estadoEquipo.fechaActualizacion = new Date();

        estadoEquipo = await estadoEquipo.save();
        res.status(400).send(estadoEquipo);

    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error")
}

});

router.get("/", async function (req, res) {
    try {
      
        const tipos = await EstadoEquipo.find();
        res.status(400).send(tipos);
     
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurio un error");
 }
});

router.put("/:estadoEquipoid", async function (req, res) {
    try {
        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoid);
        if (!estadoEquipo) {
            return res.status(400).send("no existe estado");
        }
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date();
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);

    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error")
}
});
router.delete = async  (req=request , res=response) => {
    try {
        console.log(req.params)
        const id = req.params
        const estadoEquipo = await EstadoEquipo.findById(id)
        if (!estadoEquipo) {
            return res.status(400).send("no existe estado");
        }
        await EstadoEquipo.findByIdAndDelete(id)
        return res.status(200).send("eliminado");
       
       

    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error")
}
};

module.exports = router;