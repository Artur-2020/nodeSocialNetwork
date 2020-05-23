const Model = require('../model.js')

class PhotosModel extends Model{
    constructor(){
        super()
        this.table='photos'
    }

}
module.exports = new PhotosModel