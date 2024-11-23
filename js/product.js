function fetchdata(){
   fetch("http://localhost:3000/products")
   .then((r)=>{
    return r.json();
   })
   .then((res)=>{
    console.log(res);
    document.getElementById("product").innerHTML=show(res)
    

    kids(res)
men(res)

document.getElementById("a1").addEventListener("click",()=>{

    women(res)
})


   })
   .catch((er)=>{
    console.log(er);
    
   })
}


fetchdata()


function show(arr){
    return  arr.map((el)=>{
        return `<div>    <img src="${el.img1}">   ${el.type}<div>`
    }).join("")
}

function men(arr){
    let u= arr.filter((el)=>{
        return el.type=="men"
        
    })
    document.getElementById("product").innerHTML=show(u)
    
}

function kids(arr){
    let u= arr.filter((el)=>{
        return el.type=="kids"
        
    })
    document.getElementById("product").innerHTML=show(u)
    
}

function women(arr){
    let u= arr.filter((el)=>{
        return el.type=="women"
        
    })
    document.getElementById("product").innerHTML=show(u)
    
}



