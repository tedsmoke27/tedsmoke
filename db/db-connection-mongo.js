const mongoose = require("mongoose");

const getconnection = async () => {
    try {
        const url = "mongodb://tedsmoke:DmNxiqkyfwxSjWU6@ac-yhpnplw-shard-00-00.sbs7rwq.mongodb.net:27017,ac-yhpnplw-shard-00-01.sbs7rwq.mongodb.net:27017,ac-yhpnplw-shard-00-02.sbs7rwq.mongodb.net:27017/inventariosapirest?ssl=true&replicaSet=atlas-cbbyjs-shard-0&authSource=admin&retryWrites=true&w=majority";
        
        await mongoose.connect(url);

        console.log("conexion exitosa");
    }
    catch (error) {
           console.log(error);
    }
}

module.exports = {
    getconnection,
}
