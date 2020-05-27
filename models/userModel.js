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
     search(val){
        let query = ''
        val = val.split(' ')
        if(val.length==1){
           query = `Select * from user where name like '%${val[0]}%' or surname like '%${val[0]}%' `
        }
        else{
           query = `Select * from user where (name like '%${val[0]}%' and surname like '%${val[1]}%')
           or (surname like '%${val[0]}%' and name like '%${val[1]}%')`
        }
         
      return new Promise((ok,errors)=>{
         this.connection.query(query,(error,data)=>{
            if(error) throw error
           
            ok(data)
         })
      })



     }

}
module.exports = new UserModel