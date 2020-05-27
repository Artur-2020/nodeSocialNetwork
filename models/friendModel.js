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

}


module.exports = new FriendModel