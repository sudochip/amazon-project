import {products} from "../data/products.js";
let productHTML='';
//alert("DISCLAIMER: This website was created only as a personal educational project.It is not official site")
products.forEach((Products)=>{
    let html=`<div class="product-block">
                <div class="image-div">
                    <img class="product-image" src="${Products.image}" alt="socks-images">
                </div>
                <div class="product-name">${Products.name}</div>
                <div style=" display: flex; align-items: center;">
                    <img class="product-rating" src="images/rating/rating-${(Products.rating.stars)*10}.png" alt="4.5 star">
                    <span style="margin-left: 6px; font-size: 17px; cursor: pointer; color: rgb(42, 124, 182);">${Products.rating.count}</span>
                </div>
                <div style="margin: 11px 0px;"><strong>$${((Products.priceCents)/100).toFixed(2)}</strong></div>
                <div>
                    <select id="${Products.id}">
                        <option value="1">Qty</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="addToCart">
                    <div id="notify-${Products.id}" style="font-size:16px; display:flex; align-items:center;color:green;"></div>
                    <button class="addtocart-button" data-product-id="${Products.id}">Add to Cart</button>
                </div>
               

            </div>`
    productHTML+=html;
 })
document.querySelector('.landingPage-Grid').innerHTML=productHTML
