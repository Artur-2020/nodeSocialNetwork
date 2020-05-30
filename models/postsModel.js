const Model = require('../model.js')

class PostsModel extends Model{
    constructor(){
        super()
        this.table='posts'
    }
    findPost(id){
      

        let query =` Select * from posts where user_id = ${id} order by(posts.id) desc  `
         console.log(id,query)
       
        
        
        return new Promise((ok,errors)=>{
           this.connection.query(query,(error,data)=>{
              if(error) throw error
             
              ok(data)
           })
        })
  
     }


}
module.exports = new PostsModel