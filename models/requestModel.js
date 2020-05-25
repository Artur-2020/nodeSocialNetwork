const Model = require('../model.js')

class RequestModel extends Model{
    constructor(){
        super()
        this.table='request'
    }
    requestCount(id){
        return new Promise((ok,errors)=>{
           this.connection.query(`Select count(*) as count from ${this.table} where user2_id = ${id} `,(error,data)=>{
              if(error) throw error
              ok(data)
           })
        })
     }
}
module.exports = new RequestModel