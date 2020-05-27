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
requerstCount()