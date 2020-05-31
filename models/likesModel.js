const Model = require('../model.js')

class likesModel extends Model{
    constructor(){
        super()
        this.table='likes'
    }

}
module.exports = new likesModel