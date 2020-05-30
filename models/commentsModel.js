const Model = require('../model.js')

class CommentsModel extends Model{
    constructor(){
        super()
        this.table='comments'
    }
    findPostComment(id){
      let query = `Select * from user join comments on comments.user_id = user.id where comments.post_id = ${id}`
      return new Promise((ok,errors)=>{
         this.connection.query(query,(error,data)=>{
            if(error) throw error
            ok(data)
         })
      })
   }  
} 
 

module.exports = new CommentsModel
