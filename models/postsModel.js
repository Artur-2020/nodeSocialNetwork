const Model = require('../model.js')

class PostsModel extends Model{
    constructor(){
        super()
        this.table='posts'
    }

}
module.exports = new PostsModel