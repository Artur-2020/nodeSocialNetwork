function requerstCount(){
   axios.post('/requestCount').
   then((result)=>{
       let count = result.data[0]['count']
       let requestCount = document.getElementById('requestCount')
       requestCount.innerHTML=count
       
   }).
   catch((error)=>{
       console.log(error)
   })
   
}
requerstCount()

   // setInterval(requerstCount,1000)


   //requestnery cucadrelu kod
   let drop=document.getElementById('navbarDropdown2')
   let dropMenu=document.getElementById('reqDropMenu')
   drop.addEventListener('click',function(){

       axios.post('/showRequests').
       then((result)=>{
           let users = result.data
           dropMenu.innerHTML=''
           for(let i = 0;i<users.length;i++){
               let div = document.createElement('div')
                   div.setAttribute('class','requestBody')
               let name = document.createElement('p')
                   name.innerHTML=users[i]['name']
                   name.setAttribute('class','requestName')

               let surname = document.createElement('p')
                   surname.innerHTML=users[i]['surname']
                   
                   surname.setAttribute('class','requestSurname')
   
               let image = document.createElement('img')
                   image.setAttribute('src',users[i]['image'])
                   image.setAttribute('class','requestImage')
   
               let acceptBtn= document.createElement('button')
                   acceptBtn.innerHTML=`<i class="lni lni-checkmark"></i>`
                   acceptBtn.dataset.id = users[i]['id']
                   acceptBtn.setAttribute('class','acceptReq')
   
               let delBtn= document.createElement('button')
                   delBtn.innerHTML=`<i class="lni lni-close"></i>`
                   delBtn.dataset.id = users[i]['id']
                   delBtn.setAttribute('class','delReq')
               // console.log(users[i]['id'])
                div.append(image,name,surname,acceptBtn,delBtn)
                dropMenu.append(div)   

                let acceptBtns=document.querySelectorAll('.acceptReq')

                for(let i = 0; i < acceptBtns.length;i++){
                    acceptBtns[i].addEventListener('click',acceptRequest)
                }
                let delBtns = document.querySelectorAll('.delReq')
                for(let i = 0; i < delBtns.length;i++){
                   delBtns[i].addEventListener('click',deletetRequest)
               }
           }
       }).
       catch((error)=>{
           console.log(error)
       })
      
       function acceptRequest(){
           let id = this.dataset.id
           axios.post('/acceptRequest',{id}).
           then((result)=>{
               console.log(result.data)
               this.parentElement.remove()
           }).
           catch((error)=>{
               console.log(error)
           })
           
       }
       function deletetRequest(){
           let id = this.dataset.id
           axios.post('/deleteRequest',{id}).
           then((result)=>{
               console.log(result.data)
               this.parentElement.remove()
           }).
           catch((error)=>{
               console.log(error)
           })
       }    
      
       
   })

   document.getElementById('searchInp').addEventListener('input',search)

   function search(){
    let searchList = document.getElementById('searchResult')

       let val = this.value
      if(val.length!=''){
       axios.post('/search',{val}).
       then((result)=>{
           searchList.style=`display:block;transition:0.3s;`
           searchList.innerHTML=''
           let users = result.data

           
           for(let i = 0;i<users.length;i++){
            let div = document.createElement('div')
                div.setAttribute('class','searchBody')
            let name = document.createElement('p')
                name.innerHTML=users[i]['name']
                name.setAttribute('class','searchName')

            let surname = document.createElement('p')
                surname.innerHTML=users[i]['surname']
                
                surname.setAttribute('class','searchSurname')

            let image = document.createElement('img')
                image.setAttribute('src',users[i]['image'])
                image.setAttribute('class','searchImage')
                 div.append(image,name,surname)

            if(users[i].status == 'ynker chen'){
               let btn = document.createElement('button')

                btn.dataset.id=users[i].id
                btn.innerHTML='Send Request'
                btn.setAttribute('class','sendReq')
                div.append(btn)
            }
           else if(users[i].status == 'ynker en'){
               let btn = document.createElement('button')  
                btn.dataset.id=users[i].id
                btn.innerHTML='Delete'
                btn.setAttribute('class','delFriend')
                div.append(btn)
            }
            else if(users[i].status=='es em uxarkel'){
                let btn = document.createElement('button')  
                btn.dataset.id=users[i].id
                btn.innerHTML='Cancel Sending'
                btn.setAttribute('class','cancelReq')
                div.append(btn)
            }
            else if(users[i].status=='inqn e uxarkel'){
                let btn = document.createElement('button')  
                btn.dataset.id=users[i].id
                btn.innerHTML=`<i class="lni lni-checkmark"></i>`
                btn.setAttribute('class','acceptSearch')
                let btn2 = document.createElement('button')  
                btn2.dataset.id=users[i].id
                btn2.innerHTML=`<i class="lni lni-close"></i>`
                btn2.setAttribute('class','deleteSearch')
                div.append(btn,btn2)

            }
            searchList.append(div)   

            let sendBtns =  document.querySelectorAll('.sendReq')
                for(let i = 0;i<sendBtns.length;i++){
                    sendBtns[i].addEventListener('click',sendRequest)
                }
                let cancelBtns =  document.querySelectorAll('.cancelReq')
                for(let i = 0;i<cancelBtns.length;i++){
                    cancelBtns[i].addEventListener('click',cancelRequest)
                }
                let delFriendBtns = document.querySelectorAll('.delFriend') 
                for(let i = 0;i<delFriendBtns.length;i++){
                    delFriendBtns[i].addEventListener('click',delFriend)
                }
                acceptSearchReqBtns = document.querySelectorAll('.acceptSearch')
                for(let i = 0;i < acceptSearchReqBtns.length;i++){
                    acceptSearchReqBtns[i].addEventListener('click',acceptSearchReq)
                }
                delSearchReqBtns = document.querySelectorAll('.deleteSearch')
                for(let i = 0;i < acceptSearchReqBtns.length;i++){
                    delSearchReqBtns[i].addEventListener('click',delSearchReq)
                }

            
        }
           
           

       }).
       catch((error)=>{
           console.log(error)
       })
       function sendRequest(){
           let id = this.dataset.id
           axios.post('/sendRequest',{id}).
           then((result)=>{
               console.log(result.data)
               
           }).
           catch((error)=>{
               console.log(error)
           })
       }
       function cancelRequest(){
            let id = this.dataset.id
            axios.post('/cancelRequest',{id}).
            then((result)=>{
                console.log(result.data)
                
            }).
            catch((error)=>{
                console.log(error)
            })
       }
       function delFriend(){
           let id = this.dataset.id
           axios.post('/delSearchFriend',{id}).
           then((result)=>{
               console.log(result.data)
               
           }).
           catch((error)=>{
               console.log(error)
           })
       }
       function acceptSearchReq(){
            let id = this.dataset.id
            axios.post('acceptSearchReq',{id}).
            then((result)=>{
                console.log(result.data)
                
            }).
            catch((error)=>{
                console.log(error)
            })
        }
        function delSearchReq(){
            let id = this.dataset.id
            axios.post('delSearchReq',{id}).
            then((result)=>{
                console.log(result.data)
                
            }).
            catch((error)=>{
                console.log(error)
            })
        }

      }
      else{
          searchList.style.display='none'
      }
   }