
function AddToCart(){
    fetch(`https://render-js03-tatacliq.onrender.com/likeProduct`)
    .then((r)=>{return r.json()})
    .then((res)=>{
        // console.log(res)
        if(res>=0){
            document.getElementById("text").innerHTML = `
            <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/like-heart-shape-KaZBLyD-600.jpg" alt="Like heart shape" width="100px">
            <p style="font-weight: bold;font-size: 20px;">Your Wishlist is Empty</p>
        `
        }
        else{
        console.log(res)
        document.getElementById("likeBox").innerHTML=cartView(res)
    }

    document.getElementById("add").addEventListener("click",()=>{
        add(res)
       })
       
    })
}

function cartView(arr){
    return arr.map((ele) => {
        return `
           <div class="border  h-[460px] p-2">
         <div id="img"  class=" h-[60%] p-2 flex justify-center relative">
         <i class="fa-solid fa-heart absolute top-2 xl:right-5 right-2 p-2 bg-white rounded-lg text-[red]" id="like" onclick="del(${ele.id})"></i>
          <img src="${ele.img1}" alt="" class="h-full w-[90%] rounded-lg">
         </div>
        <div id="text">
         <button  class="h-[35px] w-[70%] bg-[#DA1C5C] text-[white] ms-[20px] xl:ms-[40px] rounded-lg" id="add">Add to Bag</button>

        <p id="title" class="font-bold">${ele.brand}</p>
         <p class="text-[gray] text-[12px] mb-1">${ele.dis}</p>
         <p class=" text-[gray] text-[12px]">Color : ${ele.color}</p>
                   <span class="font-bold">₹${ele.price}</span>
                   <span class="text-[gray] line-through">₹${ele.mrp_price}</span>
                   <span class="text-[green] text-[12px] font-semibold">${ele.off}% off</span>
          <h6 class="border rounded-[210px] w-[60px] ps-2 mt-1 flex items-center">${ele.rate} 
                   <i class="fa-solid fa-star text-[gold] text-[12px] ms-1"></i></h6>


          </div>
   </div>
        `
    }).join("")
}


function add(res) {
  console.log("Data to be added:", res); // Debugging step

  fetch(`http://localhost:3000/cart`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(res), // Ensure res matches the expected structure
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
  })
  .then((data) => {
      console.log("Server response:", data);
      Swal.fire({
          title: "Product Added!",
          text: "You clicked the button!",
          icon: "success",
      });
  })
  .catch((error) => {
      console.error("Fetch error:", error);
      Swal.fire({
          title: "Error!",
          text: "Failed to add the product.",
          icon: "error",
      });
  });
}


function del(id){
    fetch(`https://render-js03-tatacliq.onrender.com/likeProduct/${id}`,{
        method :'DELETE',
    })
    .then((res)=>{
        window.location.reload() 
    })
}

AddToCart()