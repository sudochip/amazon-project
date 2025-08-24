import {products} from './landing-page.js';
let cart=[];
let cartValue=0;
let interverId=null;
document.querySelector(".cart-qty").innerHTML=cartValue;
function getQty(productId){
    let value= Number(document.getElementById(productId).value);
    return value;
}
function notify(productId){
    
    document.getElementById(`notify-${productId}`).innerHTML='<span class="material-icons" style="font-size:18px;">check_circle</span>Added';
    clearTimeout(interverId);
    interverId=setTimeout(()=>{
        document.getElementById(`notify-${productId}`).innerHTML=''; 
    },2000)
}
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
            localStorage.setItem('cartValue',JSON.stringify(cart));
        }
       
        cartValue+=getQty(productId);
        localStorage.setItem('cartqty',JSON.stringify(cartValue));
        notify(productId);
        document.querySelector(".cart-qty").innerHTML=cartValue;
    })
    

})



