let url= new URLSearchParams(window.location.search)
let id= url.get("id")
console.log(id);


function fetchdata(){
    fetch(`http://localhost:3000/products/${id}`)
    
    .then((r)=>{
     return r.json();
    })
    .then((res)=>{
    document.getElementById("container").innerHTML=show(res)
    // add(res)
 document.getElementById("add").addEventListener("click",()=>{
  add(res)
 })
 

    })
    .catch((er)=>{
     console.log(er);
     
    })
 }


 fetchdata()


function show(el){
    return `
     
    <div class="w-[87%]  xl:flex  m-[auto]">
        <div class="w-full xl:w-[50%] h-[100vh]">
            <div class="w-[100%] h-[400px]">
                <div class="w-[100%] h-[400px] flex justify-evenly">
                    <div class="w-[40%] h-[370px]  rounded-2xl">
                        <img src="${el.img1}" alt="" id="bhi">
                        <img src="" alt="" id="mh">
                        <p id="gh" class="p-2">${el.off}% off</p>
                    </div>
                    <div class="w-[40%] h-[370px]  rounded-2xl border" >
                        <img src="${el.img2}" alt="" id="bhi">
                        <img src="" alt="" id="mh1">
                      
                    
                    </div>
                </div>
                <div class="w-[100%] h-[300px]  flex justify-evenly">
                    <div class="w-[27%] h-[270px] border border-2 rounded-2xl">
                        <img src="${el.img3}" alt="" id="bhi">
                    </div>
                    <div class="w-[27%] h-[270px] border border-2 rounded-2xl">
                        <img src="${el.img4}" alt=""id="bhi">
                    </div>
                    <div class="w-[27%] h-[270px] border border-2 rounded-2xl" >
                        <img src="${el.img5}" alt="" id="bhi">
                    </div>
                </div>
            </div>
            
        </div>

        <!--  -->
        <div class="w-full xl:w-[50%] p-1">
            <!-- home -->
            <div class="w-[100%] xl:h-[45px] leading-[40px]">
                <p class="text-[13px] text-slate-500">Home > Women's cl..> Ethnic Wear > Suits > biba off White...</p>
            </div>

            <div class="lg:w-[45%] leading-[30px] bg-[#FDF4F7] rounded-full ps-2">
                <i class="fa-regular fa-heart"id="bv"></i><span class="text-slate-500 text-[10px] sm:text-[14px]">
                 Popular :: Recently wishlisted 155 times</span>
            </div>
<!-- popular -->
            <div class="text w-[100%]">
                <p class="text-[20px] font-bold leading-[40px]">${el.brand}</p>
                <p class="text-[14px] text-slate-500 ">${el.dis}</p>
                <p class="text-[15px] font-bold mt-2">$${el.price} <span class="text-[gray] line-through">MRP:$${el.mrp_price}</span>
                 <span class="text-lime-600">${el.off}%off</span></p>
                <p class="text-[15px] mt-2">Incluse of all taxes</p>
                <h2 class="mt-2 p-1 rounded-lg bg-[#F5A623] text-white w-[60px]"><i class="fa-solid fa-star me-[3px]"></i>${el.rate}  </h2>
            </div>
            <!-- tm -->
            <div class="w-[100%] h-[50px] border-y-2 flex  leading-[50px] mt-10 ">
                <img src="https://www.tatacliq.com/src/pdp/components/img/BestOffer.gif" alt="" id="mt">
                <p>Get this for only</p>
                <span class="text-green-700"></span>
                <p class="text-red-600 ms-[auto] font-bold">view offers</p>
            </div>

            <!-- get -->
            <div class="w-[100%] p-2 mt-3">
                <p class="mb-2 font-bold">Select Size</p>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">XS</button>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">S</button>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">M</button>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">L</button>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">XL</button>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">XXL</button>
                <button class="border border-black text-[gray] rounded-lg w-[40px] h-[40px] ms-1">3XL</button>
                <p class="pt-4 text-[gray] w-[80%]">Please check size chart table to know the exact size to be ordered
                    88% Rayon 12% Flax, Dry clean</p>
            </div>
             
          <div class="w-[100%] border-t leading-[35px] p-2 mt-3">
            <h1 class="font-bold">Ship To</h1>
            <div class="addrees border rounded-lg flex px-2 mb-3">
                <p>Delhi , 110001</p>
                <p class="font-bold text-[#DA1C5C] ms-[auto]">Change pincode</p>
            </div>
            <p class="flex"><img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" class="me-2"> Delivery by <span class="font-bold">1st Dec</span></p>
            <p class="flex"><img src="https://www.tatacliq.com/src/general/components/img/cod.svg" alt="" class="me-2"> Cash on Delivery |<span class="text-[green] font-bold">Available</span></p>
            <p class="flex"><img src="https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg" alt="" class="me-2"> 7 Days Easy Return |<span class="text-[red] font-bold">Know More</span></p>
          </div>
    

          <div class="w-[100%] flex p-2 bg-white shadow-lg">
           <button class="border rounded-lg w-[50px] h-[50px] flex justify-center items-center"><img src="https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg" alt=""></button>
           <button class="border rounded-lg w-[50px] h-[50px] ms-4 flex justify-center items-center"><img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt=""></button>
           <button class="border border-[#DA1C5C] rounded-lg text-[#DA1C5C] p-2 w-[200px] ms-4 h-[50px]">Buy Now</button>
           <button class="border rounded-lg bg-[#DA1C5C] text-white p-2 w-[200px] ms-4 h-[50px]"  id="add"  >Add To  Bag</button>
          </div>

         </div>
          </div>
    `
}


function add(res){
  fetch(`http://localhost:3000/cart/`,{
    method:"POST",
    headers:{
      "content-type":"application/json"

    },
    body:JSON.stringify({...res,quenty:1})
  })
  .then((r)=>{
    return r.json();
  })
  .then((res)=>{
    console.log(res);
    
  })
  .catch((er)=>{
    console.log(er);
    
  })

  Swal.fire({
    title: "Product Added !",
    text: "You clicked the button!",
    icon: "success"
  });
}
