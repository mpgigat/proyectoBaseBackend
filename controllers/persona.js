import { response, request } from 'express';
import Persona from '../models/persona.js'

const personaGet = async (req, res = response) => {     
    const query=req.query.query;  
    const persona=await Persona.find({$or:[
        {nombre:new RegExp(query,'i')},
        {numdocumento:new RegExp(query,'i')},
        {telefono:new RegExp(query,'i')},
        {email:new RegExp(query,'i')},

    ]},{})     
        .sort({'createdAt':-1})      
    res.json({ 
        persona
    })
}


const personaGetClientes = async (req, res = response) => {    
    const query=req.query.query;
    const persona=await Persona.find({tipopersona:'Cliente',$or:[
            {nombre:new RegExp(query,'i')},
            {numdocumento:new RegExp(query,'i')},
            {telefono:new RegExp(query,'i')},
            {email:new RegExp(query,'i')},            
        ]},{})     
        .sort({'createdAt':-1})      
    res.json({ 
        persona
    })
}

const personaGetProveedores = async (req, res = response) => {     
    const query=req.query.query;
    const persona=await Persona.find({tipopersona:'Proveedor',$or:[
            {nombre:new RegExp(query,'i')},
            {numdocumento:new RegExp(query,'i')},
            {telefono:new RegExp(query,'i')},
            {email:new RegExp(query,'i')},
            
        ]},{})     
        .sort({'createdAt':-1})      
    res.json({ 
        persona
    })
}

const personaGetById = async (req, res = response) => {
    const { id } = req.params;
    const persona = await Persona.findOne({_id:id})       
    res.json({
        persona
    })
}

const personaPost = async (req, res) => {

    const {tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email}=req.body; //raw tipo json
    const persona=new Persona({tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email});

    //const persona = new persona(req.body);
    await persona.save();

    res.json({
        persona
    })
}

const personaPut = async (req, res) => {   
    const { id } = req.params;
    const { _id, createdAt,estado, ...resto } = req.body;

    const persona = await Persona.findByIdAndUpdate(id, resto);

    res.json({
        persona
    })
}

const personaPutActivate=async (req, res) => {   
    const { id } = req.params;
    const persona = await Persona.findByIdAndUpdate(id, {estado:1});

    res.json({
        persona
    })
}

const personaPutDeActivate=async (req, res) => {   
    const { id } = req.params;
    const persona = await Persona.findByIdAndUpdate(id, {estado:0});

    res.json({
        persona
    })
}

const personaDelete = async (req, res) => {
   const { id } = req.params;
   
   const persona=await Persona.findByIdAndDelete(id);
   
    res.json({ 
        persona
    })
}


export { personaGet, personaGetById, personaPost, personaPut, personaDelete,personaPutActivate,personaPutDeActivate,personaGetClientes,personaGetProveedores }