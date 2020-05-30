document.getElementById('Password').addEventListener('click',function(){
   document.getElementById('personalInfo').removeAttribute('class')
   this.setAttribute('class','active')
   document.getElementById('personalForm').style = `display: none;`
   
   document.getElementById('editHead').innerHTML="Edit Password"
   document.getElementById('passwordForm').style = `display:block;`

   document.getElementById('personalInfo').style= `cursor:pointer;`
   this.style= `cursor:pointer;`


})

document.getElementById('personalInfo').addEventListener('click',function(){
   document.getElementById('Password').removeAttribute('class')
   this.setAttribute('class','active')
   document.getElementById('editHead').innerHTML="Edit Datas"

   document.getElementById('passwordForm').style = `display:none; `
   document.getElementById('personalForm').style = `display: block;`
   document.getElementById('Password').style= `cursor:pointer;`
   this.style= `cursor:pointer;`






})