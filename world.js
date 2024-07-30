//window.alert("hello");

setInterval(()=>{
    d=new Date();
    console.log(d)
    usa.innerHTML=d.toLocaleString('en-US',
    {
    timezone:'Asia/Kolkata'
    }).split(',')[1]
    },1000)