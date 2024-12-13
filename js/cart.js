function fetchdata() {
    fetch(`https://render-js03-tatacliq.onrender.com/cart`)
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res);
            document.getElementById("cart_length").innerHTML = res.length
            document.getElementById("cartt").innerHTML = show(res)
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
         
        })
        .catch((er) => {
            console.log(er);

        })
}
fetchdata()
function show(arr) {

    let mr_pr_total = 0
    let pr_discount = 0
    let fainal_total = 0
    let bag_s = 0

    return arr.map((el,index) => {

        fi_off = Math.round((el.mrp_price * el.off) / 100)

        pr_discount += fi_off * el.quenty

        let fi_price = Math.round(el.mrp_price - fi_off)

        mr_pr_total = mr_pr_total + el.mrp_price * el.quenty

        let bag_s = mr_pr_total + 29

        fainal_total = bag_s - pr_discount
        
        document.getElementById("t_price").innerHTML = mr_pr_total

        document.getElementById("bag_sub").innerHTML = bag_s

        document.getElementById("discount").innerHTML = pr_discount
        
        document.getElementById("discounts").innerHTML = pr_discount

        document.getElementById("final_total").innerHTML = fainal_total


  return `
 <div id="cartBox" class="border rounded-lg sm:flex justify-between p-3 w-full xl:h-[270px] mt-3">
 <div id="img" class=" rounded-lg overflow-hidden sm:w-[35%] sm:w-[25%] h-[210px] flex justify-center items-center">
     <img src="${el.img1}" alt="" class="h-[100%] rounded-lg">
 </div>
 <div id="text" class="sm:w-[70%] p-1">
     <p class="mt-2 mb-2"> ${el.dis} </p>
     <span>  ₹${fi_price*el.quenty} </span>
     <span class="line-through text-[gray]">₹${el.mrp_price*el.quenty}</span>
     <span class="text-[green]" id="off_pr">₹${fi_off*el.quenty} Off</span>
     <p class="mt-2 mb-2">Color : ${el.color}</p>
     <p class="flex text-[13px]">
     <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" alt="" class="sm:w-[20px] me-2"> Delivery by 5 days</p>
     <div class="qty border rounded-lg h-[50px] sm:w-[30%] my-2 p-1 relative">
         <p class="text-[12px]">Qty</p>
           <input type="text" value="${el.quenty}" disabled id="quan" class="w-[30px] text-center bg-white font-bold" >
          <button onclick="Addcart(${el.id} , ${el.quenty} , 'dec')" id="Add" class="absolute top-[14px] right-4"><i class="fa-solid fa-caret-up fa-2xs"></i></button>
      
        <button onclick="Addcart(${el.id} , ${el.quenty} , 'inc')" id="Add"  class="absolute bottom-0 right-4"><i class="fa-solid fa-caret-down fa-2xs"></i></button>
     </div>
     <hr class="my-3">

     <button class=" xl:ms-[44%] p-1" ><i class="like-button fa-regular fa-heart" id="like-${index}"></i> Save to wishlist</button>
     <button class="ms-3 p-1" onclick="delete1(${el.id})"  >Remove</button>

 </div>
</div>  
        `
    }).join("")
}

function Addcart(id,quenty, clickbtn) {
    let a = quenty;
    if (clickbtn == 'inc') {
        a = a + 1
    } else if (clickbtn == 'dec') {
        a = a - 1
        if (a < 1) {
          
          document.getElementById("Add").setAttribute("disabled");
        }
    }
    

    fetch(`https://render-js03-tatacliq.onrender.com/cart/${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({quenty : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })

}



function delete1(id) {

    fetch(`https://render-js03-tatacliq.onrender.com/cart/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log('Deleted item:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });


        window.location.reload();
}


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
                console.log("Product already liked.");
            }
        });
}

function pay(){
    (async () => {
        /* inputOptions can be an object or Promise */
        const inputOptions = new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              "UPI": "UPI",
              "Cart": "Cart",
              "Cash on delary": "Cash on delary"
            });
          }, 1000);
        });
        const { value: pay } = await Swal.fire({
          title: "Select your payment method",
          html: '<img src="https://t3.ftcdn.net/jpg/03/93/36/70/360_F_393367013_08D1ZSSEiMul5dSVjq3FnktIiKb5MQiD.jpg" alt="Payment Methods" style="width:150px; margin:auto;">',
         
          input: "radio",
          inputOptions,
          inputValidator: (value) => {
            if (!value) {
              return "You need to choose something!";
            }
          }
        });
        if (pay) {
          Swal.fire({ html: `You selected: ${pay} method for payment` });
        }
      })()
}

 AddLike()
//  AddToCart()