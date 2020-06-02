const Model = require('../model.js')

class likesModel extends Model{
    constructor(){
        super()
        this.table='likes'
    }
    likeCount(id){
        // console.log(id)
        return new Promise((ok,errors)=>{
            let query = ` SELECT COUNT(post_id) as count from likes  where post_id = ${id} GROUP BY post_id`
            this.connection.query(query,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
    }
    Liked(id1,id2){
        return new Promise((ok,errors)=>{
            let query = `Select * from likes where post_id = ${id1} and user_id = ${id2} `
            this.connection.query(query,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
    }
    getLikers(id){
       let query = `Select * from user join likes on likes.user_id = user.id where post_id = ${id}`
       return new Promise((ok,errors)=>{
        this.connection.query(query,(error,data)=>{
           if(error) throw error
           ok(data)
        })
     })
    }

}
module.exports = new likesModel