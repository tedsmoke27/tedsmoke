const { Router } = require("express");

const router = Router();

const Usuario = require ("../models/Usuario")


router.post("/", async function (req, res) {
    try {
        console.log("objeto resibido", req.body);
      
        
        const existeUsuario = await Usuario.findOne({ email: req.body.email });
        console.log("respuseta existe usuario",existeUsuario);
        if (existeUsuario) {
            return res.status(400).send("email existente");
        }

        
        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();
    
        usuario = usuario.save();
        res.status(400).send(req.body);
}catch (error) {
    console.log(error);
    res.status(500).send("ocurrio un error");
}


   
});

router.get("/", async function (req, res) {
    try {
        const usuario = await Usuario.find();
        res.status(400).send(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error")
    }
});


router.put("/:usuarioid", async function (req, res) {
    try {
        console.log("objeto recibido", req.body, req.params);
        
        let usuario = await Usuario.findById(req.params.usuarioid);
        
        if (!usuario) {
            return res.status(400).send("usuario no existe");
        } 

        const existeUsuario = await Usuario.findOne({ email: req.body.email, _id:{ $ne: usuario._id } });
        console.log("repuesta existe usuario", existeUsuario);
        
        if (existeUsuario) {
            return res.status(400).send("email existente");
        }

        usuario.email = req.body.email;
        usuario.nombre = req.body.nombre;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date(); 
        usuario = await usuario.save();

        res.status(400).send(usuario);
     
    } catch (error) {
        console.log(error);
        res.status(500).send("ocurrio un error");
    }
});

module.exports = router;