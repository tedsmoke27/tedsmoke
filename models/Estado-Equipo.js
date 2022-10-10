const { Schema, model } = require ("mongoose");

const EstadosequipoSchema = Schema({
    nombre: {
        type: String,
        required:true,
    },
    estado: {
        type: String,
        return: true,
        enum :[
            "activo", "inactivo"
        ]
    }, 
    fechaCreacion: {
        type: Date,
        required:true,
    },
    fechaActualizacion: {
        type: Date,
        required:true,
    },


})

module.exports = model("EstadosEquipo", EstadosequipoSchema );