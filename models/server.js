const express=require('express');
const cors=require('cors');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        //midlewares //agregan funcionalidad// se ejecutan al iniciar el servidor
        this.usuariosPruebaRoutePath='/api/usuariosprueba';

        this.middlewares();

        //ruts de la app
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        
        //parseo y lectura del body
        this.app.use(express.json());

        this.app.use(express.static('public'));        
    }

    routes(){
        this.app.use(this.usuariosPruebaRoutePath,require('../routes/usuariosPrueba'));
    }

    listen(){
        this.app.listen(this.port ,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports=Server;