let cart=[];
let cartValue=0;
document.querySelector(".cart-qty").innerHTML=cartValue;
function getQty(productId){
    let value= Number(document.getElementById(productId).value);
    return value;
}
document.querySelectorAll(".addtocart-button").forEach((button)=>{
    button.addEventListener("click",()=>{
        const productId=button.dataset.productId;
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
        document.querySelector(".cart-qty").innerHTML=cartValue;
    })
    

})



