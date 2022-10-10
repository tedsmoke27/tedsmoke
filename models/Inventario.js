const { Schema, model } = require('mongoose');


const InventarioSchema = Schema({
    serial: {
        type: String,
        require: true,
        unique : true,
    },
    modelo: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },
    foto: {
        type: String,
        require: true,
    },
    fechaCompra: {
        type: String,
        required: true,
      
    },
    precio: {
        type: Number,
        required:true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false,
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: true,
    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true ,
    },
    estadoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'EstadosEquipo',
        required: true ,
    },
    fechaCreacion: {
        type: Date,
        required:true,
    },
    fechaActualizacion: {
        type: Date,
        required:true,
    },
});

module.exports = model("Inventario",InventarioSchema );