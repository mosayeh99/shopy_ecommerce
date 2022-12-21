
fetch("https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json").then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;

})
.then((myData) => {
    myData.length = 50;
    console.log(myData);
    return myData;

})
.then((myData) => {
return(myData)
})
.then((end)=>{
    
var i =49;
let productImg = document.getElementById("productImg");  //Display Images
productImg.src=`${end.products[i].images[0]}`;        
let btn =document.getElementsByClassName("btn");
       btn[0].onclick = function(){
        productImg.src=`${end.products[i].images[0]}`;
        for(bt of btn){
            bt.classList.remove("active");
        }
        this.classList.add("active")
       }
       btn[1].onclick = function(){
        productImg.src=`${end.products[i].images[1]}`;
        for(bt of btn){
            bt.classList.remove("active");
        }
        this.classList.add("active")
       }
       btn[2].onclick = function(){
        productImg.src=`${end.products[i].images[2]}`;
        for(bt of btn){
            bt.classList.remove("active");
        }
        this.classList.add("active")
       }
       btn[3].onclick = function(){
        productImg.src=`${end.products[i].images[3]}`;
        for(bt of btn){
            bt.classList.remove("active");
        }
        this.classList.add("active")
       }
var title =document.querySelector(".title")   //Display title
title.innerHTML = ` ${end.products[i].title}`;
var Category =document.querySelector(".Category")   //Display Category
Category.innerHTML = ` category : ${end.products[i].category}`;

var priceAfter=document.querySelector(".priceAfter");   //Display Price After discount
priceAfter.innerHTML = ` ${end.products[i].price} L.E`;

var priceBefore=document.querySelector(".priceBefore");     //Display Price before discount
priceBefore.innerHTML = ` ${end.products[i].insteadPrice} L.E`;

var list1=document.querySelector(".list1");                    //Display Description
list1.innerHTML = ` ${end.products[i].description[0]}`;
var list2=document.querySelector(".list2");
list2.innerHTML = ` ${end.products[i].description[1]}`;
var list3=document.querySelector(".list3");
list3.innerHTML = ` ${end.products[i].description[2]}`;
var list4=document.querySelector(".list4");
list4.innerHTML = ` ${end.products[i].description[3]}`;
var list5=document.querySelector(".list5");
list5.innerHTML = ` ${end.products[i].description[4]}`;
var list6=document.querySelector(".list6");
if(end.products[i].description[5] == null ){
    document.querySelector(".list6").style.display = "none";
}else{
list6.innerHTML = ` ${end.products[i].description[5]}`;
}

var size1=document.querySelector(".size1");                    //Display Size
size1.innerHTML = ` ${end.products[i].sizes[0]}`;
var size2=document.querySelector(".size2");
size2.innerHTML = ` ${end.products[i].sizes[1]}`;
var size3=document.querySelector(".size3");
if(end.products[i].sizes[2] == null ){
    document.querySelector(".size3").style.display = "none";
}else{
    size3.innerHTML = ` ${end.products[i].sizes[2]}`;
}

var size4=document.querySelector(".size4");
if(end.products[i].sizes[3] == null ){
    document.querySelector(".size4").style.display = "none";
}else{
    size4.innerHTML = ` ${end.products[i].sizes[3]}`;
}
var size5=document.querySelector(".size5");
if(end.products[i].sizes[4] == null ){
    document.querySelector(".size4").style.display = "none";
}else{
    size5.innerHTML = ` ${end.products[i].sizes[4]}`;
}

})