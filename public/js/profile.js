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