


const { response, request } = require('express');

const usurariosGet =(req= request, res = response)=> {
    const {id, nombre= "Falta el nombre", apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get API - controlador',
        id,
        nombre,
        apikey,
        page,
        limit
    })
  }
  const usuariosPost =(req, res = response)=> {
    
    const {nombre , edad} = req.body;
    res.json({
        msg: 'post API- controlador',
        nombre,
        edad
    })
  }
const usuariosPut= (req, res = response)=> {
    const { id } = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    })
  }

const usuariosPath= (req, res = response)=> {
    res.json({
        msg: 'patch API- controlador'
    })
  }
const usuariosDelete =(req, res = response)=> {
    res.json({
        msg: 'delete API- controlador'
    })
  }
  module.exports={
    usurariosGet,usuariosPut,usuariosPost,usuariosPath,usuariosDelete
  }