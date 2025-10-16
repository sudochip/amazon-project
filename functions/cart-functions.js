import {cart,saveCart,cartValue} from '../data/cart.js'
import { deliveryop } from '../data/dileveryopt.js';
import {products} from '../data/products.js'
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
// add delivery options html
export function optionhtml(Pid,delDate){
    let html=''; 
    deliveryop.forEach(option=>{
        html+=
    `<div class="option-1">
        <input type="radio" class="delivery" name="${Pid}" value="${option.id}" ${option.id===delDate? "checked":''}>
        <div>
            <div class="delivery-dates">${setDate(option.deliveryTime)}</div>
            <div class="delivery-price">${option.priceCents==0? 'FREE':`$${option.priceCents/100}`} Shipping</div>
        </div>
    </div>`
    })
    return html;
}

//function for for grenerating html if delivery option get changed\
export function optionChanged(value,productID){
    cart.forEach((product)=>{
        if(product.productId===productID){
            product.deliveryID=Number(value);
        }
    })
    document.querySelector(`.delivery-${productID}`).innerText=`Delivery date: ${showOnPage(value)}`
    saveCart(cart);
    console.log(cart);
}
export function showOnPage(value){
    let time;
    deliveryop.forEach((option)=>{
        if(option.id==value){

            time=setDate(option.deliveryTime);
        }
    })
    return time;
}

export function updateSummary(){
    let MRPsum=0;
    let deliverysum=0;
    cart.forEach((iteam)=>{
        let {productId}=iteam;
        products.forEach((product)=>{
            if(product.id===productId){
                MRPsum+=product.priceCents*iteam.quantity;
            }
        })
        deliveryop.forEach((option)=>{
            if(option.id===iteam.deliveryID){
                deliverysum+=option.priceCents;
            }
        })
    })
    const totalcost=((deliverysum+MRPsum)/100);
    const tax=((totalcost/100)*10).toFixed(2);
    const grandTotal=(Number(totalcost)+ Number(tax)).toFixed(2)
    document.querySelector('.toal-Iteam').innerText=`Items (${cartValue}):`;
    document.querySelector('.total-Amount').innerText=`$${MRPsum/100}`;
    document.querySelector('.handling-shiping').innerText=`$${deliverysum/100}`;
    document.querySelector('.toalPlusShiping').innerText=`$${totalcost}`;
    document.querySelector('.total-tax').innerText=`$${tax}`;
    document.querySelector('.grand-total').innerText=`$${grandTotal}`;

}
    