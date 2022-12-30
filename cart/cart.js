// //decleration
// const productContainer = document.querySelector(".products")
// //function
const api = "https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json"
//  function displayCart() {
//   let cartItems = localStorage.getItem("productsInCart")
//   cartItems = JSON.parse(cartItems)
//   // console.log(cartItems)

  const response = await fetch(api);
  const data = await response.json();
console.log(data.products[0].images[0])

//   let itemType = localStorage.getItem("shopySearchInputValue")
//   itemType = JSON.parse(itemType)

//   Object.values(cartItems).map(item => {
//     console.log(item);

//     productContainer.innerHTML += `
//       <p>${item.productId}</p>
//       <p>${item.productSize}</p>
//       <p>${item.productQty}</p>
//       <p>${itemType}</p>
      
      
//     ` 
//   })
// }
// displayCart();



// // async function getData() {
// //   const response = await fetch(api);
// //   const data = await response.json();
// // console.log(data.products[0].images[0])
// {/* <p>${data.products[0].images[0]}</p> */}

// // }
// // getData();


// $('.visibility-cart').on('click',function(){
       
//   var $btn =  $(this);
//   var $cart = $('.cart');
//   console.log($btn);
  
//   if ($btn.hasClass('is-open')) {
//      $btn.removeClass('is-open');
//      $btn.text('O')
//      $cart.removeClass('is-open');     
//      $cart.addClass('is-closed');
//      $btn.addClass('is-closed');
//   } else {
//      $btn.addClass('is-open');
//      $btn.text('X')
//      $cart.addClass('is-open');     
//      $cart.removeClass('is-closed');
//      $btn.removeClass('is-closed');
//   }

                  
// });


let decreaseQuantity = document.querySelector(".decrease-quantity")
let increaseQuantity = document.querySelector(".increase-quantity")
let quantity = document.querySelector(".quantity")

increaseQuantity.addEventListener('click',function(){
  quantity.innerHTML = Number(quantity.innerHTML) +1 ;
});

decreaseQuantity.addEventListener('click',function(){
  if (quantity.innerHTML !== "1"){
      quantity.innerHTML = Number(quantity.innerHTML) -1 ;
  }
});


