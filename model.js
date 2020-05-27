//mode; jsy bazayi het ashxatelu hamaer e
const mysql = require('mysql')


class Model{
   constructor(){
      this.connection = mysql.createConnection({
         host:"localhost",
         user:"root",
         password:'',
         database:"artsocialnetwork"
       
       }) 
       this.table=''  


   }
   findAll(){
      return new Promise((ok,errors)=>{
         this.connection.query(`Select * from ${this.table}`,(error,data)=>{
            if(error) throw error
            ok(data)
         })
      })
   }
   find(data){
      
      
      let query =`Select * from ${this.table} where `

      for(let i in data){
         query+= `${i}='${data[i]}' and `
      }
      query=query.substring(0,query.length-4)
      
      
      return new Promise((ok,errors)=>{
         this.connection.query(query,(error,data)=>{
            if(error) throw error
           
            ok(data)
         })
      })

   }
   

   insert(data){

      let keys = Object.keys(data)
      let values = Object.values(data)
      keys=keys.join(',')
      values=values.join("','")
      // console.log(keys)
      let query = `Insert into ${this.table}(${keys}) values ('${values}')`
      // console.log(query)

      // console.log(values)
      return new Promise((ok,errors)=>{
         this.connection.query(query,(error,data)=>{
            if(error) throw error
            ok(data.insertId)
            
         })
      
      })

   }
   delete(dat){
      
      let query =`Delete  from ${this.table} where `
      for(let i in dat){
         query+= `${i}='${dat[i]}' and `
      }
      query=query.substring(0,query.length-4)
      // console.log(query)
      this.connection.query(query,(error,data)=>{
         if(error) throw error
      })
      
   }
   update(value,con){

      let query  = `Update ${this.table} set `

      for(let i in value){
         query+=`${i}='${value[i]}', `
      }
      query=query.substring(0,query.length-2)
      query+=' where '
      for(let i in con){
         query+= `${i}='${con[i]}' and `
      }
      query=query.substring(0,query.length-4)
      
      this.connection.query(query,(error,data)=>{
         if(error) throw error
         // console.log(data)
      })
      
   }


}

module.exports = Model