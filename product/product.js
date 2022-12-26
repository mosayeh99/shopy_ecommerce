
// fetch("https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json").then((result) => {

//     let myData = result.json();
    
//     return myData;

// })
// .then((myData) => {
//     myData.length = 50;
    
//     return myData;

// })
// .then((myData) => {
// return(myData)
// })
// .then((end)=>{
    
//     var i = JSON.parse(localStorage.getItem('IdProductToShow'))
//     i-=1;
// let productImg1 = document.querySelector("#image1");  
// productImg1.src=`${end.products[i].images[0]}`;   
// let productImg2 = document.querySelector("#image2");  
// productImg2.src=`${end.products[i].images[1]}`;   
// let productImg3 = document.querySelector("#image3");  
// productImg3.src=`${end.products[i].images[2]}`;   
// let productImg4 = document.querySelector("#image4");
// if(end.products[i].images[3] == null ){
//     document.querySelector("#image4").style.display = "none";
// }else{
//     productImg4.src=`${end.products[i].images[3]}`;
// }  
   

// let imgHolder =document.getElementsByClassName("img-holder");
//        imgHolder[0].onclick = function(){
//         imgHolder.src=`${end.products[i].images[0]}`;
//         for(image of imgHolder){
//             image.classList.remove("active");
//         }
//         this.classList.add("active")
//        }
//        imgHolder[1].onclick = function(){
//         imgHolder.src=`${end.products[i].images[1]}`;
//         for(image of imgHolder){
//             image.classList.remove("active");
//         }
//         this.classList.add("active")
//        }
//        imgHolder[2].onclick = function(){
//         imgHolder.src=`${end.products[i].images[2]}`;
//         for(image of imgHolder){
//             image.classList.remove("active");
//         }
//         this.classList.add("active")
//        }
//        imgHolder[3].onclick = function(){
//         imgHolder.src=`${end.products[i].images[3]}`;
//         for(image of imgHolder){
//             image.classList.remove("active");
//         }
//         this.classList.add("active")
//        }
// var title =document.querySelector(".title")   //Display title
// title.innerHTML = ` ${end.products[i].title}`;
// var Category =document.querySelector(".Category")   //Display Category
// Category.innerHTML = ` category : ${end.products[i].category}`;

// var priceAfter=document.querySelector(".priceAfter");   //Display Price After discount
// priceAfter.innerHTML = ` ${end.products[i].price} L.E`;

// var priceBefore=document.querySelector(".priceBefore");     //Display Price before discount
// priceBefore.innerHTML = ` ${end.products[i].insteadPrice} L.E`;

// var list1=document.querySelector(".list1");                    //Display Description
// list1.innerHTML = ` ${end.products[i].description[0]}`;
// var list2=document.querySelector(".list2");
// list2.innerHTML = ` ${end.products[i].description[1]}`;
// var list3=document.querySelector(".list3");
// list3.innerHTML = ` ${end.products[i].description[2]}`;
// var list4=document.querySelector(".list4");
// list4.innerHTML = ` ${end.products[i].description[3]}`;
// var list5=document.querySelector(".list5");
// list5.innerHTML = ` ${end.products[i].description[4]}`;
// var list6=document.querySelector(".list6");
// if(end.products[i].description[5] == null ){
//     document.querySelector(".list6").style.display = "none";
// }else{
// list6.innerHTML = ` ${end.products[i].description[5]}`;
// }

// var size1=document.querySelector(".size1");                    //Display Size
// size1.innerHTML = ` ${end.products[i].sizes[0]}`;
// var size2=document.querySelector(".size2");
// if(end.products[i].sizes[2] == null ){
//     document.querySelector(".size3").style.display = "none";
// }else{
//     size3.innerHTML = ` ${end.products[i].sizes[1]}`;
// }
// var size3=document.querySelector(".size3");
// if(end.products[i].sizes[2] == null ){
//     document.querySelector(".size3").style.display = "none";
// }else{
//     size3.innerHTML = ` ${end.products[i].sizes[2]}`;
// }

// var size4=document.querySelector(".size4");
// if(end.products[i].sizes[3] == null ){
//     document.querySelector(".size4").style.display = "none";
// }else{
//     size4.innerHTML = ` ${end.products[i].sizes[3]}`;
// }
// var size5=document.querySelector(".size5");
// if(end.products[i].sizes[4] == null ){
//     document.querySelector(".size4").style.display = "none";
// }else{
//     size5.innerHTML = ` ${end.products[i].sizes[4]}`;
// }

// })

fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
.then(res => res.json())
.then((full) =>{
    let productHead ="" ;
    let productContent="";
    let productSizeHead="";
    let productFoot="";
    let product="";
        full.products.forEach(e => {
            console.log(JSON.parse(localStorage.getItem('IdProductToShow')))
            if (e.id == JSON.parse(localStorage.getItem('IdProductToShow')) )
            {
                console.log("x");
            productHead=`
            <div class="product">
            <div class="images">
                <div class="mainsliderimage">
                    <img src="" alt="">
                </div>
                <div class="smallbuttonimages">`
                let imageSlider = "";
                e.images.forEach(el => {
                    imageSlider += `<img src="${el}" id="slide-image">`
                })
                productContent=`
                </div>
            </div>
            <div class="details">
                <div class="title"><span>${e.title}</span></div>
                <div class="priceAfter"><span>EGP<span></span>${e.price}</span></div>
                <div class="priceBefore"><del>EGP<span></span>${e.insteadPrice}</del></div>
                <div class="description-list">                      
                    <ul>`
                let productDescription="";
                e.description.forEach(ele => {
                    productDescription+= `<li>${ele}</li>`
                })
                productSizeHead=`
                </ul>
                </div>
                <form >
                    <div class="display-size">
                    `
                let productSize="";
                e.size.forEach(elem => {
                    productSize+=`<button>${elem}</button>`
                })
                productFoot =`
                </div>

                    <div class="quantity-select ">
                        <span class="decrease-quantity">-</span>
                        <span class="quantity">1</span>
                        <span class="increase-quantity">+</span>
                    </div>
                    <button class="add-to-card-btn">Add to cart</button>
                </form>
            </div>
        </div>
                `
                product =  productHead + imageSlider + productContent + productDescription + productSizeHead + productSize + productFoot;
            }
        })
        document.querySelector(".product-container").innerHTML = product;
    })
