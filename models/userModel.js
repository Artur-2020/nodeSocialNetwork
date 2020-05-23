const Model = require('../model.js')

class UserModel extends Model{
    constructor(){
        super()
        this.table='user'
    }
    findEmail(data){
      
      
        let query =`Select * from ${this.table} where `
  
       query+=`email = '${data.email}' and id != ${data.id}`
        // query=query.substring(0,query.length-4)
        // console.log(query)
       
        
        return new Promise((ok,errors)=>{
           this.connection.query(query,(error,data)=>{
              if(error) throw error
             
              ok(data)
           })
        })
  
     }

}
module.exports = new UserModel