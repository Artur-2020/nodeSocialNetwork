document.getElementById('Password').addEventListener('click',function(){
   document.getElementById('personalInfo').removeAttribute('class')
   this.setAttribute('class','active')

   document.getElementById('editHead').innerHTML="Edit Password"

   document.getElementById('passwordForm').classList.remove('passiveForm')
   document.getElementById('passwordForm').classList.add('activeForm')

   document.getElementById('personalForm').classList.remove('activeForm')
   document.getElementById('personalForm').classList.add('passiveForm')

   document.getElementById('personalInfo').style= `cursor:pointer;`
   this.style= `cursor:pointer;`


})

document.getElementById('personalInfo').addEventListener('click',function(){
   document.getElementById('Password').removeAttribute('class')

   this.setAttribute('class','active')

   document.getElementById('editHead').innerHTML="Edit Datas"

   document.getElementById('passwordForm').classList.remove('activeForm')
   document.getElementById('passwordForm').classList.add('passiveForm')

   document.getElementById('personalForm').classList.remove('passiveForm')
   document.getElementById('personalForm').classList.add('activeForm')


   document.getElementById('Password').style= `cursor:pointer;`
   this.style= `cursor:pointer;`






})