import {cart,cartValue,saveCart,saveqty,updateSaveCartValue,updateProductqty} from '../data/cart.js'
import { deliveryop } from '../data/dileveryopt.js'
import {products} from '../data/products.js'
import { removeFromcart,setDate,optionhtml,optionChanged,showOnPage,updateSummary } from '../functions/cart-functions.js'
import {} from 'https://unpkg.com/dayjs@1.11.10/dayjs.min.js'
//alert("It is NOT the official website of amazon")
let html='';
let updateCheck= 1;
updateSummary();
document.querySelector('.cartVal').innerHTML=`Items ${cartValue}`;
cart.forEach((product)=>{
    let {productId}=product;
    let matchingItem;
    products.forEach((item)=>{
        if(item.id===productId){
            matchingItem=item;
        }
    })
    console.log(product.deliveryID)
    html+=`<div class="product-card js-${productId}">
                <div class="delivery-time delivery-${productId}">Delivery date: ${showOnPage(product.deliveryID)}</div>
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
                            ${optionhtml(productId,product.deliveryID)};
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
       updateSummary()
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
                updateSummary()
            }
            return 0;
        }
    })
    
})

document.querySelectorAll('.delivery').forEach((input)=>{
    input.addEventListener('click',()=>{
        optionChanged(input.value,input.name);
        showOnPage(input.value,input.name);
        updateSummary();
    })
})

