const {response}=require('express');

const usuariosPruebaGet =(req, res=response) => {//para obtener algo de tipado

    const {param1,param2='por si no viene',page=1}=req.query;   //direcion?param1&param2

    
    res.status(403).json({ //llamado ilegal
        ok:true, //esta demas
        msg:'get api - Controlador'
    })
}

const usuariosPruebaPost=(req, res) => {      
    const body=req.body; //raw tipo json

    res.json({ //llamado ilegal
        ok:true, //esta demas
        msg:'post api'
    })
}

const usuariosPruebaPut= (req, res) => {       
    const id=req.params.id;     //api/materias/10

    res.json({ //llamado ilegal
        ok:true, //esta demas
        msg:'put api'
    })
}

const usuariosPruebaDelete= (req, res) => {       
    res.json({ //llamado ilegal
        ok:true, //esta demas
        msg:'delete api'
    })
}


module.exports={usuariosPruebaGet,usuariosPruebaPost,usuariosPruebaPut,usuariosPruebaDelete}