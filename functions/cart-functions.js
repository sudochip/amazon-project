import {cart,saveCart} from '../data/cart.js'


// It will get selected quantity form qty section
export function getQty(productId){
    let value= Number(document.getElementById(productId).value);
    return value;
}
// Shows "Added" on screen
export function notify(productId){
    let interverId=null;
    document.getElementById(`notify-${productId}`).innerHTML='<span class="material-icons" style="font-size:18px;">check_circle</span>Added';
    clearTimeout(interverId);
    interverId=setTimeout(()=>{
        document.getElementById(`notify-${productId}`).innerHTML=''; 
    },1000)
}

// remove item from cart
export function removeFromcart(productId){
    cart.forEach((product,indx)=>{
        if(product.productId===productId){
            cart.splice(indx,1);
            saveCart(cart);
            return 0;
        }
    })
    console.log(cart);
}

// set date month and year

export function setDate(n,t=0){
    if(t==0){
        return (dayjs().add(n,'days').format('dddd, MMMM DD'));
    }
    if(t==1){
        return (dayjs().add(n,'days').format('dddd, MMMM DD'));
    }
    
}
