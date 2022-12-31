// Looping in API and display all data of the selected product 
fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
.then(res => res.json())
.then((full) =>{
    let productHead ="" ;
    let productContent="";
    let productQuantity="";
    let productFoot="";
    let product="";
    full.products.forEach(e => {
        if (e.id == JSON.parse(localStorage.IdProductToShow)) {
        productHead=`
        <div class="product">
        <div class="images">
            <div class="mainsliderimage">
                <img src="${e.images[0]}" alt="">
            </div>
            <div class="smallbuttonimages">`
        let imageSlider = "";
        let imageSliderCounter = 0;
        e.images.forEach(el => {
            if (imageSliderCounter == 0) {
                imageSlider += `
                <div class="slide-thumbs">
                    <img src="${el}" class="slide-image active">
                </div>
                `
                imageSliderCounter++;
            }else {
                imageSlider += `
                <div class="slide-thumbs">
                    <img src="${el}" class="slide-image">
                </div>
                `
            }
        })
        productContent=`
            </div>
        </div>
        <div class="details">
            <div class="title"><span>${e.title}</span></div>
            <div class="product-price">
                <span>EGP<span  class="priceAfter">${e.price}</span></span>
                <del>EGP<span class="priceBefore">${e.insteadPrice}</span></del>
            </div>
            <div class="display-size">
            `
        let productSize="";
        let productSizeCounter = 0 ;
        e.sizes.forEach(elem => {
            if(productSizeCounter == 0){
                productSize += `<button class="size active" data-productfirstsize="${elem}">${elem}</button>`
                productSizeCounter++;
            }else{
                productSize += `<button class="size">${elem}</button>`
            }
        })
        productQuantity = `
            </div>
            <div class="quantity-select ">
                <span class="decrease-quantity">-</span>
                <span class="quantity">1</span>
                <span class="increase-quantity">+</span>
            </div>
            <div class="description-list">
                <ul>
        `
        let productDescription="";
        e.description.forEach(ele => {
            productDescription += `<li>${ele}</li>`
        })
        productFoot=`
                </ul>
            </div>
            <button class="add-to-cart-btn" data-productid="${e.id}" >Add to cart<span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                </span>
            </button>
            <div class="go-to-cart-btn">
                <a href="../cart/cart.html">
                    <button>View Cart</button>
                </a>
            </div>
            <div class="product-features">
                <div class="feature">
                    <div class="feature-img">
                        <img src="../assets/images/icon-delivery.webp" alt="">
                    </div>
                    <p>Rapid worldwide delivery</p>
                </div>
                <div class="feature">
                    <div class="feature-img">
                        <img src="../assets/images/icon-60-day-returns.webp" alt="">
                    </div>
                    <p>60 day return policy with free UK return label</p>
                </div>
                <div class="feature">
                    <div class="feature-img">
                        <img src="../assets/images/icon-1-year.avif" alt="">
                    </div>
                    <p>We will replace or repair any faulty item</p>
                </div>
            </div>
            </div>
        </div>
        `
        product =  productHead + imageSlider + productContent + productSize + productQuantity + productDescription + productFoot;
        }
    })

    // Select HTML Container to Display the product 
    document.querySelector(".product-container").innerHTML = product;

   // Select HTML elements of Quantity  
    let decreaseQuantity = document.querySelector(".decrease-quantity")
    let increaseQuantity = document.querySelector(".increase-quantity")
    let quantity = document.querySelector(".quantity")
    // Select add to card button
    let addToCard = document.querySelector(".add-to-cart-btn")
    // Select sizes
    let productSizes =document.querySelectorAll(".size")

    // Image slider 
    let mainProductImg = document.querySelector('.mainsliderimage img');
    let productThumbs = document.querySelectorAll('.slide-thumbs .slide-image');
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('slide-image')) {
            productThumbs.forEach(el => {
                el.classList.remove('active')
            })
            e.target.classList.add('active');
            mainProductImg.src = e.target.src;
        }
    })
    
    // Quantity
    increaseQuantity.addEventListener('click',function(){
        quantity.innerHTML = Number(quantity.innerHTML) +1 ;
    })
    
    decreaseQuantity.addEventListener('click',function(){
        if (quantity.innerHTML !== "1"){
            quantity.innerHTML = Number(quantity.innerHTML) -1 ;
        }
    })
    // Sizes
    let sizeValue = document.querySelector(".display-size .size").dataset.productfirstsize;
    document.addEventListener('click',(e) =>{
        if(e.target.classList.contains("size")){
            productSizes.forEach(el =>{
                el.classList.remove('active')
            }) 
            e.target.classList.add('active')
            sizeValue = e.target.innerHTML;
        }
    })
    // add productInfo to local storage
    let productsCartArray =[];
    addToCard.addEventListener('click',function(){
        if (localStorage.productsInCart != null){
        productsCartArray = JSON.parse(localStorage.productsInCart)
        }
        let productInfoObject = { 
            productId : addToCard.dataset.productid ,
            productSize : sizeValue ,
            productQty : quantity.textContent
        }
        productsCartArray.push(productInfoObject);
        localStorage.setItem('productsInCart',JSON.stringify(productsCartArray));
        document.querySelector(".add-to-cart-btn span").style.display = "inline";
        document.querySelector(".go-to-cart-btn").style.height = '76px';
        countProductInCart.forEach(e => { // countProductInCart => declared in nav/nav.js
            e.textContent = productsCartArray.length;
        });
    })
})


