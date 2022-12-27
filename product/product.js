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
        e.sizes.forEach(elem => {
            productSize += `<button>${elem}</button>`
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
            <button class="add-to-card-btn">Add to cart</button>
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
    document.querySelector(".product-container").innerHTML = product;
})

setTimeout(() => {
    let = mainProductImg = document.querySelector('.mainsliderimage img');
    let = productThumbs = document.querySelectorAll('.slide-thumbs .slide-image');
    document.addEventListener('click', (e) => {
        // e.stopPropagation();
        if (e.target.classList.contains('slide-image')) {
            productThumbs.forEach(el => {
                el.classList.remove('active')
            })
            e.target.classList.add('active');
            mainProductImg.src = e.target.src;
        }
    })
},1000)
