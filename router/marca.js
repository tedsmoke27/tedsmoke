const { Router } = require("express");
const Marca = require("../models/Marca");
const router = Router();



router.post("/", async function (req, res) {
    try {
          
        let marca = new Marca();
        marca.nombre = req.body.nombre;
        
        marca.estado = req.body.estado;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();
    
        marca = await marca.save();
        res.status(400).send(marca);
}catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error");
}
});

router.get("/", async function (req, res) {
    
    try {
        const marcas = await Marca.find();
        res.status(400).send(marcas);
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error");
   }


});

router.put("/:marcaid", async function (req, res) {
    try {
          
        let marca = await Marca.findById(req.params.marcaid);
        if (!marca) {
            return res.status(400).send("marca no existe")
        }
        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaActualizacion = new Date();
    
        marca = await marca.save();
        res.status(400).send(marca);
}catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error");
}
});

module.exports = router;