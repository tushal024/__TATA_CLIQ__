function fetchdata(){
    fetch("http://localhost:3000/products")
    .then((r)=>{
     return r.json();
    })
    .then((res)=>{
     console.log(res);
     document.getElementById("product").innerHTML=show(res)
     
    //  price
     document.getElementById("fil1").addEventListener("change",function(){
         if(this.checked){ const filteredProducts1 = fil(res);  document.getElementById("product").innerHTML = show(filteredProducts1);}
         else{ document.getElementById("product").innerHTML=show(res)}
     }) 
     document.getElementById("fil2").addEventListener("change",function(){
        if(this.checked){  const filteredProducts1 = fil1(res);  document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    }) 
    document.getElementById("fil3").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil2(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    }) 
    document.getElementById("fil4").addEventListener("change",function(){
        if(this.checked){  const filteredProducts1 = fil3(res);document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    }) 
    document.getElementById("fil5").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil4(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    }) 
    document.getElementById("fil6").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil5(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })

    // color
    document.getElementById("fil6").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil5(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil7").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil6(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil8").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil7(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil9").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil8(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil10").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil9(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil11").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil10(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil12").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil11(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil13").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil12(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil14").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil13(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })

    // brand
    document.getElementById("fil15").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil14(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil16").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil15(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil17").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil16(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil18").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil17(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil19").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil18(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil20").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil19(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil21").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil20(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil22").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil21(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })
    document.getElementById("fil25").addEventListener("change",function(){
        if(this.checked){ const filteredProducts1 = fil22(res); document.getElementById("product").innerHTML = show(filteredProducts1);}
        else{ document.getElementById("product").innerHTML=show(res)}
    })

     op1(res)

     document.querySelectorAll(".like-button").forEach((likeButton, index) => {
        likeButton.addEventListener("click", () => {
            likeButton.style.color = "red";
            AddLike(res[index]); 
        });
    });
    document.getElementsByClassName("like-button").addEventListener("click",()=>{
        likeButton.style.color = "red";
        AddLike(res[index]); 
    })
 
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
 
// sorting

function op1(arr) {
  
    let opt1 = document.getElementById("opt")
    opt1.addEventListener("change", () => {

        let compare= opt1.value
        console.log(compare);
        

        if(compare== 'lh'){
            let anss = arr.sort((a, b) => {
                return a.price - b.price
            })
    
            document.getElementById(`product`).innerHTML = show(anss)  
        }
        if(compare=='hl'){
            let anss = arr.sort((a, b) => {
                return b.price - a.price
            })
            console.log(anss);
    
            document.getElementById(`product`).innerHTML = show(anss)
    
        }

        if(compare=='normal'){
            let anss = arr.sort((a, b) => {
                return a.id - b.id
            })
            console.log(anss);
    
            document.getElementById(`sec-1`).innerHTML = view(anss)
    
        }
    })
}

 fetchdata()
 
//  viewData in htmlPage
 function show(arr){
     return  arr.map((el,index)=>{
         return `
           <div class=" xl:h-[480px]">
                 <div id="img" class=" h-[68%] flex justify-center relative w3-content w3-display-container">
                 <i class="like-button fa-regular fa-heart absolute top-2 right-6 sm:right-4 p-2 bg-white rounded-lg" id="like-${index}"></i>
                       <a href="single_page.html?id=${el.id}" ><img src="${el.img1}" class="rounded-lg  h-full"></a>
                 </div>
                 <a href="single_page.html?id=${el.id}" > <div id="text " class="p-2">
                  <h2 class="font-bold mb-1">${el.brand} </h2>
                   <p class="text-[gray] text-[12px] mb-1">${el.dis}</p>
                   <p class=" text-[gray] text-[12px]">Color : ${el.color}</p>
                   <span class="font-bold">₹${el.price}</span>
                   <span class="text-[gray] line-through">₹${el.mrp_price}</span>
                   <span class="text-[green] text-[12px] font-semibold">${el.off}% off</span>
                   <h6 class="border rounded-[210px] w-[60px] ps-2 mt-1 flex items-center">${el.rate} 
                   <i class="fa-solid fa-star text-[gold] text-[12px] ms-1"></i></h6>
                 </div></a>
               </div>
         
         `
     }).join("")
 }

//  filtering
 
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
        // price-filtering
 function fil(arr){return arr.filter((ele) => ele.price <= 500);}
 function fil1(arr){return arr.filter((ele) => ele.price > 501 && ele.price <= 1000);}
 function fil2(arr){return arr.filter((ele) => ele.price > 1001 && ele.price <= 2000);}
 function fil3(arr){return arr.filter((ele) => ele.price > 2001 && ele.price <= 3000);}
 function fil4(arr){return arr.filter((ele) => ele.price >= 3001); }
         // color-filtering
 function fil5(arr){return arr.filter((ele) => ele.color =="Aqua"); }
 function fil6(arr){return arr.filter((ele) => ele.color =="purple"); }
 function fil7(arr){return arr.filter((ele) => ele.color =="black"); }
 function fil8(arr){return arr.filter((ele) => ele.color =="white"); }
 function fil9(arr){return arr.filter((ele) => ele.color =="green"); }
 function fil10(arr){return arr.filter((ele) => ele.color =="brown"); }
 function fil11(arr){return arr.filter((ele) => ele.color =="pink"); }
 function fil12(arr){return arr.filter((ele) => ele.color =="blue"); }
 function fil13(arr){return arr.filter((ele) => ele.color =="gray"); }
        // brand
        function fil14(arr){return arr.filter((ele) => ele.brand =="Spykar"); }
        function fil15(arr){return arr.filter((ele) => ele.brand =="Jack & Jones"); }
        function fil16(arr){return arr.filter((ele) => ele.brand =="W"); }
        function fil17(arr){return arr.filter((ele) => ele.brand =="skylle"); }
        function fil18(arr){return arr.filter((ele) => ele.brand =="yufta"); }
        function fil19(arr){return arr.filter((ele) => ele.brand =="Libas"); }
        function fil20(arr){return arr.filter((ele) => ele.brand =="Juniper"); }
        function fil21(arr){return arr.filter((ele) => ele.brand =="U.S. Polo Assn."); }
        function fil22(arr){return arr.filter((ele) => ele.brand =="puma"); }

 // like product
function AddLike(product) {
    fetch(`http://localhost:3000/likeProduct?id=${product.id}`)
        .then((r) => r.json())
        .then((res) => {
            if (res.length === 0) { 
                fetch(`http://localhost:3000/likeProduct`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ ...product, quantity: 1 })
                })
                .then((r) => r.json())
                .then((res) => console.log( res))
                .catch((err) => console.log( err));
            } else {
                alert("Product already liked.");
            }
        });
}


 AddLike()

