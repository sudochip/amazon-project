import {cart} from '../data/cart.js'
import {products} from '../data/products.js'
let html=''
cart.forEach((product)=>{
    let {productId}=product;
    console.log(productId);
    let matchingItem;
    products.forEach((item)=>{
        if(item.id===productId){
            matchingItem=item
        }
    })
    html+=`<div class="product-card">
                <div class="delivery-time">Delivery date: Tuesday, September 2</div>
                <div class="product-detail-card">
                    <div><img class="product-image" src="${matchingItem.image}"></div>
                    <div style="width:268px;">
                        <strong>${matchingItem.name}</strong>
                        <div style="font-weight: 600; color:rgb(187, 39, 4);margin:10px 0px">$${((matchingItem.priceCents)/100).toFixed(2)}</div>
                        <div class="qty-add-del">
                            <div>Quantity: ${product.quantity}</div>
                            <div class="update-button">Update</div>
                            <div class="delete-button">Delete</div>
                        </div>
                    </div>
                    <div class="oneAtATime">
                        <div>
                            <div><strong>Choose a delivery option:</strong></div>
                            <div class="option-1">
                                <input type="radio" class="delivery-options" name="option">
                                <div>
                                    <div class="delivery-dates">Monday, September 8</div>
                                    <div class="delivery-price">FREE Shipping</div>
                                </div>
                            </div>
                            <div class="option-2">
                                <input type="radio" class="delivery-options" name="option">
                                <div>
                                    <div class="delivery-dates">Tuesday, September 2</div>
                                    <div class="delivery-price">$4.99 - Shipping</div>
                                </div>
                            </div>
                            <div class="option-3">
                                <input type="radio" class="delivery-options" name="option">
                                <div>
                                    <div class="delivery-dates">Friday, August 29</div>
                                    <div class="delivery-price">$9.99 - Shipping</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}) 
document.querySelector('.product-section').innerHTML=html