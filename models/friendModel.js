const Model = require('../model.js')

class FriendModel extends Model{
    constructor(){
        super()
        this.table='friend'
    }
    findFriend(id){

        return new Promise((ok,errors)=>{
            let query = `Select * from user where id in(Select user2_id from friend where user1_id = ${id} 
                union
                 Select user1_id from friend where user2_id = ${id})   `
            this.connection.query(query,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
    }
    deletFriend(id1,id2){
        return new Promise((ok,errors)=>{
            let query = ` Delete  from ${this.table} where (user1_id=${id1} and user2_id=${id2})
            or (user1_id=${id2} and user2_id=${id1})`
            this.connection.query(query,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
    }
    checkFriend(id1,id2){
        
        return new Promise((ok,errors)=>{
            let query = ` Select * from ${this.table} where (user1_id=${id1} and user2_id=${id2})
            or (user1_id=${id2} and user2_id=${id1})`
            this.connection.query(query,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })

    }
    findFriendPost(id){
        return new Promise((ok,errors)=>{
            let query = ` select * from user join posts on user.id=posts.user_id where user.id in 
            (Select user2_id from friend where user1_id = ${id} union Select user1_id from friend where user2_id = ${id})
            ORDER BY posts.id desc`
            this.connection.query(query,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
        }
        
        

    

}


module.exports = new FriendModel