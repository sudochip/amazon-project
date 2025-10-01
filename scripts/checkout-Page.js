import {cart,cartValue,saveCart,saveqty,updateSaveCartValue,updateProductqty} from '../data/cart.js'
import {products} from '../data/products.js'
import { removeFromcart,setDate } from '../functions/cart-functions.js'
import {} from 'https://unpkg.com/dayjs@1.11.10/dayjs.min.js'
console.log(setDate(0))
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
                <div class="delivery-time">Delivery date: ${setDate(9)}</div>
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
                                <input type="radio" class="delivery-options" name="${productId}" value="${setDate(5)}" checked>
                                <div>
                                    <div class="delivery-dates">${setDate(9)}</div>
                                    <div class="delivery-price">FREE Shipping</div>
                                </div>
                            </div>
                            <div class="option-2">
                                <input type="radio" class="delivery-options" name="${productId}" value="${setDate(5)}">
                                <div>
                                    <div class="delivery-dates">${setDate(5)}</div>
                                    <div class="delivery-price">$4.99 - Shipping</div>
                                </div>
                            </div>
                            <div class="option-3">
                                <input type="radio" class="delivery-options" name="${productId}" value="${setDate(1)}">
                                <div>
                                    <div class="delivery-dates">${setDate(1)}</div>
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
       updateSaveCartValue();
       saveqty(cartValue);
       document.querySelector(`.js-${productId}`).remove();
    })
})

document.querySelectorAll('.update-button').forEach((button)=>{
    button.addEventListener('click',()=>{
        const {productId}=button.dataset;
        if(updateCheck){
            button.innerHTML='Apply';
            updateCheck=0;
            document.querySelector(`.js-quantity-${productId}`).innerHTML=`<input type="number" class="qty-input js-input-${productId}">`;
        }
        else{
            const newValue=Number(document.querySelector(`.js-input-${productId}`).value);
            if(newValue>0){
                document.querySelector(`.js-quantity-${productId}`).innerText=`${newValue}`;
                button.innerHTML='Update'
                updateCheck=1;
                updateProductqty(productId,newValue);
                saveCart(cart);
                updateSaveCartValue();
            }
            return 0;
        }
    })
    
})