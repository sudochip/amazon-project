import {cart,saveqty,cartValue,saveCart} from '../data/cart.js'
import { getQty,notify} from '../functions/cart-functions.js';
let cartTemp=cartValue;
document.querySelector(".cart-qty").innerHTML=cartValue;
document.querySelectorAll(".addtocart-button").forEach((button)=>{
    button.addEventListener("click",()=>{
        const { productId } = button.dataset;
        let matchingItem
        cart.forEach((item)=>{
            if (productId===item.productId){
                matchingItem=item;
            }
        
        })
        if(matchingItem){
            matchingItem.quantity=  matchingItem.quantity+getQty(productId)
        }
        else{
            cart.push({
                productId,
                quantity:getQty(productId)
            })
        }
        cartTemp+=getQty(productId);
        saveCart(cart);
        saveqty(cartTemp);
        notify(productId);
        document.querySelector(".cart-qty").innerHTML=cartTemp;
        console.log(cart);
    })
})
document.querySelector('.reset').addEventListener('click',()=>{
    localStorage.removeItem('cartqty')
    localStorage.removeItem('cartValue')
    cart.length= 0;       // reset in-memory cart
    cartTemp = 0;
    document.querySelector(".cart-qty").innerHTML=0;
})
