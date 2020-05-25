const Model = require('../model.js')

class FriendModel extends Model{
    constructor(){
        super()
        this.table='friend'
    }

}
module.exports = new FriendModel