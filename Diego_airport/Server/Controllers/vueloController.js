const Vuelo = require('../Models/vueloModel')

exports.getAllVuelos = async(req, res) =>{
   const vuelos = await Vuelo.find()
   return res.status(200).json(vuelos)
}
exports.getOneVuelo = async(req, res) =>{
    const { id } = req.params;
    const vuelo = await Vuelo.findById(id)
    return res.status(200).json(vuelo)
}
exports.createVuelos = async (req, res) => {
    const newVuelo = new Vuelo({...req.body})
    const createdVuelo = await newVuelo.save()
    return res.status(201).json(createdVuelo)
}
exports.updateVuelo = async(req, res)=>{
    const { id } = req.params;
    await Vuelo.updateOne({_id: id}, {...req.body})
    const updatedVuelo = await Vuelo.findById(id)
    return res.status(200).json(updatedVuelo)
}

exports.deleteVuelo = async(req, res) => {
   const { id } = req.params
   const deletedVuelo = await Vuelo.findByIdAndDelete(id)
   return res.status(202).json(deletedVuelo)
}