const Model = require('../model.js')

class MessageModel extends Model{
    constructor(){
        super()
        this.table='message'
    }
    findMessage(id1,id2){
        let query = `Select * from ${this.table} where (user1_id =${id1} and user2_id = ${id2})
       or (user1_id=${id2} and user2_id=${id1})` 
        return new Promise((ok,errors)=>{
           this.connection.query(query,(error,data)=>{
              if(error) throw error
                  ok(data)
            })
        })    
    }
 
} 
module.exports = new MessageModel
