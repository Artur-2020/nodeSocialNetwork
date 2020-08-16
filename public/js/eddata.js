document.getElementById('Password').addEventListener('click',function(){
   document.querySelector('.active').classList.remove('active')

   this.setAttribute('class','active')

   document.getElementById('editHead').innerHTML="Edit Password"

   document.querySelector('.activeForm').classList.add('passiveForm')
   document.querySelector('.activeForm').classList.remove('activeForm')

   document.getElementById('passwordForm').classList.remove('passiveForm')
   document.getElementById('passwordForm').classList.add('activeForm')

   document.getElementById('deactivate').style = `cursor:pointer;`
   document.getElementById('personalInfo').style= `cursor:pointer;`
   this.style= `cursor:pointer;`


})

document.getElementById('personalInfo').addEventListener('click',function(){
   document.querySelector('.active').classList.remove('active')
  

   this.setAttribute('class','active')

   document.getElementById('editHead').innerHTML="Edit Datas"


   document.querySelector('.activeForm').classList.add('passiveForm')
   document.querySelector('.activeForm').classList.remove('activeForm')
  

   document.getElementById('personalForm').classList.remove('passiveForm')
   document.getElementById('personalForm').classList.add('activeForm')


   document.getElementById('Password').style= `cursor:pointer;`
   this.style= `cursor:pointer;`
   document.getElementById('deactivate').style = `cursor:pointer;`


})
document.getElementById('deactivate').addEventListener('click',function(){
   document.querySelector('.active').classList.remove('active')
   this.setAttribute('class','active')


   document.querySelector('.activeForm').classList.add('passiveForm')
   document.querySelector('.activeForm').classList.remove('activeForm')
   
   document.getElementById('deactivateForm').removeAttribute('class','passiveForm')
   document.getElementById('deactivateForm').setAttribute('class','activeForm')

   document.getElementById('Password').style= `cursor:pointer;`
   document.getElementById('personalInfo').style= `cursor:pointer;`

   this.style= `cursor:pointer;`

})