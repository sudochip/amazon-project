export let cart=JSON.parse(localStorage.getItem('cartValue'))||[];
export let cartValue=JSON.parse(localStorage.getItem('cartqty'))||0;
// for storing cart value
export function saveqty(tempCart){
    cartValue=tempCart;
    localStorage.setItem('cartqty',JSON.stringify(cartValue));
}
 // to save cart
export function saveCart(tempCart){
    cart=tempCart;
    localStorage.setItem('cartValue',JSON.stringify(cart));
}

// Updates cart value
export function updateSaveCartValue(){
    let tempvalue=0;
    cart.forEach((products)=>{
        let productQty=products.quantity;
        tempvalue+=productQty;
    })
    saveqty(tempvalue);
    document.querySelector('.cartVal').innerHTML=`Items ${cartValue}`;
}
// upate product quantity in checkout page
export function updateProductqty(productId,value){
    let matchingItem;
    cart.forEach((item)=>{
        if(productId===item.productId){
            matchingItem=item;
        }
    })
    matchingItem.quantity=value;
    
}