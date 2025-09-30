import {cart,cartValue,saveCart,saveqty,updateCartValue,updateProductqty} from '../data/cart.js'
import {products} from '../data/products.js'
import { removeFromcart } from '../functions/cart-functions.js'
let html='';
let updateCheck= 1;
document.querySelector('.cartVal').innerHTML=`Items ${cartValue}`;
cart.forEach((product)=>{
    let {productId}=product;
    let matchingItem;
    products.forEach((item)=>{
        if(item.id===productId){
            matchingItem=item;
        }
    })
    html+=`<div class="product-card js-${productId}">
                <div class="delivery-time">Delivery date: Tuesday, September 2</div>
                <div class="product-detail-card">
                    <div><img class="product-image" src="${matchingItem.image}"></div>
                    <div style="width:268px;">
                        <strong>${matchingItem.name}</strong>
                        <div style="font-weight: 600; color:rgb(187, 39, 4);margin:10px 0px">$${((matchingItem.priceCents)/100).toFixed(2)}</div>
                        <div class="qty-add-del">
                            <div class="qty-section">Quantity: <span class="cart-quanty  js-quantity-${productId}">${product.quantity}</span></div>
                            <div class="update-button  js-update-${productId}" data-product-id="${productId}">Update</div>
                            <div class="delete-button  js-delete-${productId}" data-product-id="${productId}">Delete</div>
                        </div>
                    </div>
                    <div class="oneAtATime">
                        <div>
                            <div><strong>Choose a delivery option:</strong></div>
                            <div class="option-1">
                                <input type="radio" class="delivery-options" name="${productId}">
                                <div>
                                    <div class="delivery-dates">Monday, September 8</div>
                                    <div class="delivery-price">FREE Shipping</div>
                                </div>
                            </div>
                            <div class="option-2">
                                <input type="radio" class="delivery-options" name="${productId}">
                                <div>
                                    <div class="delivery-dates">Tuesday, September 2</div>
                                    <div class="delivery-price">$4.99 - Shipping</div>
                                </div>
                            </div>
                            <div class="option-3">
                                <input type="radio" class="delivery-options" name="${productId}">
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

document.querySelectorAll('.delete-button').forEach((button)=>{
    button.addEventListener('click',()=>{
       const {productId}=button.dataset;
       removeFromcart(productId);
       updateCartValue();
       saveqty(cartValue);
       document.querySelector(`.js-${productId}`).remove()
       document.querySelector('.cartVal').innerHTML=`Items ${cartValue}`;
    })
})

document.querySelectorAll('.update-button').forEach((button)=>{
    button.addEventListener('click',()=>{
        const {productId}=button.dataset;
        console.log(productId);
        if(updateCheck){
            button.innerHTML='Apply';
            updateCheck=0;
            document.querySelector(`.js-quantity-${productId}`).innerHTML=`<input type="number" class="qty-input js-input-${productId}">`;
        }
        else{
            const newValue=Number(document.querySelector(`.js-input-${productId}`).value);
            console.log(newValue);
            if(newValue>0){
                document.querySelector(`.js-quantity-${productId}`).innerText=`${newValue}`;
                button.innerHTML='Update'
                updateCheck=1;
                updateProductqty(productId,newValue);
                saveCart(cart);
            }
            return 0;
        }
        console.log(cart);
    })
    
})