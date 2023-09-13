const express =  require('express')
const router = express.Router()
const vueloController = require('../Controllers/vueloController')

router.get('', vueloController.getAllVuelos)
router.get('/:id', vueloController.getOneVuelo)
router.post('', vueloController.createVuelos)
router.patch('/:id', vueloController.updateVuelo)
router.delete('/:id', vueloController.deleteVuelo)


module.exports = router