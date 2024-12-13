fetch(`https://render-js03-tatacliq.onrender.com/cart`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {

        let addcart=res.length
        document.getElementById("total").innerHTML=addcart
      })
      .catch((err) => {
        console.log(err);
      });


      fetch(`https://render-js03-tatacliq.onrender.com/likeProduct`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {

        let addcart=res.length
        document.getElementById("totallike").innerHTML=addcart
      })
      .catch((err) => {
        console.log(err);
      });     