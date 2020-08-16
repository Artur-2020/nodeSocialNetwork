const Model = require('../model.js')

class NotificationModel extends Model{
    constructor(){
        super()
        this.table='notifications'
    }
    getNotifs(id){
        return new Promise((ok,errors)=>{
            this.connection.query(`Select * from user join notifications on user.id = user1_id where user2_id = ${id}`,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
    }
    notifCount(id){
        return new Promise((ok,errors)=>{
            this.connection.query(`select COUNT(id) as 'count' from notifications  where seen =0 and user2_id = ${id}`,(error,data)=>{
               if(error) throw error
               ok(data)
            })
         })
    }

}
module.exports = new NotificationModel