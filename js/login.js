let a=document.querySelector("#signUPform") 
let isvalid=true;

document.querySelector("#login").addEventListener("click",()=>{
    document.querySelector("#signUPform").style.display="none"
    document.querySelector("#loginform").style.display="block"
 })
   
document.querySelector("#signUP").addEventListener("click",()=>{
 document.querySelector("#signUPform").style.display="block"
 document.querySelector("#loginform").style.display="none"
})

a.addEventListener("submit",(e)=>{
    e.preventDefault()
    isvalid=true

    let email=document.getElementById("email").value 
    let password=document.getElementById("password").value

     document.querySelector("#emailText").innerHTML=""
    document.querySelector("#passwordText").innerHTML=""

    let emailregex=/[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/
    let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

   if(emailregex.test(email)==false){
    document.querySelector("#emailText").innerText=" Please enter a valid email"
    isvalid=false
 }
 if(passwordregex.test(password)==false){
    document.querySelector("#passwordText").innerText=" Please enter atleast 8 charatcer with number, symbol, small and  capital letter."
    isvalid=false
 }
    
   let obj={
    email :email,
    password:password,
}
console.log(obj)

fetch(`http://localhost:3000/userData`,
   {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(obj)
   })
  .then((r)=>{
   return r.json()
  })
  .then((res)=>{
   if(email == 0 && password == 0){
     
   }
   else{
      Swal.fire({
         text: "Add Details successfule",
         icon: "success"
       });
   }
  
  })

})


document.querySelector("#loginform").addEventListener("submit",(f)=>{
    f.preventDefault()
 
    let loginEmail=document.getElementById("loginEmail").value
    let loginPassword=document.getElementById("loginPassword").value

    fetch('http://localhost:3000/userData').then((r)=>{
        return r.json()
    })
    .then((res)=>{
      let ans=res.filter(ele =>{
      
         if(ele.email==loginEmail && ele.password==loginPassword){
               return ele;
         }
         });
        console.log(ans)
      if(ans.length>0){
         Swal.fire({
            text: "login successfule",
            icon: "success"
          });
      }
      else{
       document.getElementById("notmatch").innerHTML="email and password are not match"
      }
      })
      
    .catch((err)=>{
        console.log(err)
    })
})