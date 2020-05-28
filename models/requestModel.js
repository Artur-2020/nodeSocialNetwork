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
     showRequests(id){
      return new Promise((ok,errors)=>{
         this.connection.query(`Select * from user join request on user.id = user1_id where user2_id = ${id}  `,(error,data)=>{
            if(error) throw error
            ok(data)
         })
      })

     }
     ckeckRequest(id1,id2){
      return new Promise((ok,errors)=>{
         let query = ` Select * from ${this.table} where (user1_id=${id1} and user2_id=${id2})
         or (user1_id=${id2} and user2_id=${id1})`
         this.connection.query(query,(error,data)=>{
            if(error) throw error
            ok(data)
         })
      })

     }
     cancelRequest(id1,id2){
        let query = `Delete from ${this.table} where (user1_id=${id1} and user2_id=${id2})`
      this.connection.query(query,(error,data)=>{
         if(error) throw error
         
      })
     


     }
}
module.exports = new RequestModel