//controladores

import{getConnection} from "./../database/database"
//hacer peticiones get
const getnotas= async(req, res)=>{

    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, titulo, descripcion, creador, estado FROM tareas");
        console.log(result);
        res.json(result)

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
};

const getnota= async(req, res)=>{

    try{
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, titulo, descripcion, creador, estado FROM tareas WHERE id=?",id);
        console.log(result);
        res.json(result)

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
};
//enviar archivos
const addnotas=async(req, res)=>{
    
    try{
        const {titulo,descripcion,creador,estado}=req.body;
        
        if(titulo===undefined || descripcion===undefined || creador===undefined || estado===undefined){
            res.status(400).json({message: "Por favor llene todos los campos."})
        }
        const notas={   titulo, descripcion,creador,estado}
        const connection = await  getConnection();
        const result=await connection.query("INSERT INTO tareasrealizar SET ?", notas)
        res.json({message: "nota añadida"})

    }catch(error){
        res.status(500)
        res.send(error.message)
    } 
};
///realizar cambios
const updatetenota= async(req, res)=>{

    try{
        const {id}=req.params;

        const {titulo,descripcion,creador,estado}=req.body;
        
        if(id===undefined, titulo===undefined || descripcion===undefined || creador===undefined || estado===undefined){
            res.status(400).json({message: "Por favor llene todos los campos."})
        }

        const notas={ id,  titulo, descripcion,creador,estado}

        const connection = await getConnection();
        const result = await connection.query("UPDATE tareas SET ? id = ?",notas);
        console.log(result);
        res.json(result)

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
};

const deletenota= async(req, res)=>{

    try{
        const {id}=req.params;
        const connection = await getConnection();
        const result = await connection.query("DELECT FROM tareas WHERE id=?",id);
        console.log(result);
        res.json(result)

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
};

export const methods ={
    getnotas, 
    getnota,
    addnotas,
    updatetenota,
    deletenota
}