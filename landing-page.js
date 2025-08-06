let productHTML='';
 const products=[
    {
        image:'images/athletic-cotton-socks-6-pairs.jpg',
        name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rating:{
            stars:'4.5',
            review:87
        },
        priceCents:1090
    },
    {
        image:'images/intermediate-composite-basketball.jpg',
        name:'Intermediate Size Basketball',
        rating:{
            stars:4,
            review:127
        },
        priceCents:2095
    },
    {
        image:'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name:'Adults Plain Cotton T-Shirt - 2 Pack',
        rating:{
            stars:'4.5',
            review:56
        },
        priceCents:1090
    },
    {
        image:'images/black-2-slot-toaster.jpg',
        name:'2 Slot Toaster - Black',
        rating:{
            stars:5,
            review:2197
        },
        priceCents:1899
    },
    {
        image:'images/6-piece-white-dinner-plate-set.jpg',
        name:'6 Piece White Dinner Plate Set',
        rating:{
            stars:4,
            review:37
        },
        priceCents:2067
    },
    {
        image:'images/6-piece-non-stick-baking-set.webp',
        name:'6-Piece Nonstick, Carbon Steel Oven Bakeware Baking',
        rating:{
            stars:4.5,
            review:175
        },
        priceCents:3499
    },
    {
        image:'images/plain-hooded-fleece-sweatshirt-yellow.jpg',
        name:'Plain Hooded Fleece Sweatshirt',
        rating:{
            stars:'4.5',
            review:137
        },
        priceCents:2400
    },
    {
        image:'images/luxury-tower-set-6-piece.jpg',
        name:'Luxury Towel Set - Graphite Gray',
        rating:{
            stars:4.5,
            review:144
        },
        priceCents:3599
    },
    {
        image:'images/liquid-laundry-detergent-plain.jpg',
        name:'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
        rating:{
            stars:4.5,
            review:305
        },
        priceCents:2899
    },
    {
        image:'images/knit-athletic-sneakers-gray.jpg',
        name:'Waterproof Knit Athletic Sneakers - Gray',
        rating:{
            stars:4,
            review:89
        },
        priceCents:3399
    },
    {
        image:'images/women-chiffon-beachwear-coverup-black.jpg',
        name:"Women's Chiffon Beachwear Cover Up - Black",
        rating:{
            stars:4.5,
            review:235
        },
        priceCents:2070
    },
    {
        image:'images/round-sunglasses-black.jpg',
        name:'Round Sunglasses',
        rating:{
            stars:4.5,
            review:30
        },
        priceCents:3599
    },
    {
        image:'images/luxury-tower-set-6-piece.jpg',
        name:'Waterproof Knit Athletic Sneakers - Gray',
        rating:{
            stars:'4.5',
            review:144
        },
        priceCents:3599
    },
    {
        image:'images/luxury-tower-set-6-piece.jpg',
        name:'Waterproof Knit Athletic Sneakers - Gray',
        rating:{
            stars:'4.5',
            review:144
        },
        priceCents:3599
    },
    {
        image:'images/luxury-tower-set-6-piece.jpg',
        name:'Waterproof Knit Athletic Sneakers - Gray',
        rating:{
            stars:'4.5',
            review:144
        },
        priceCents:3599
    },
 ].forEach((Products)=>{
    let html=`<div class="product-block">
            <div class="image-div">
                <img class="product-image" src="${Products.image}" alt="socks-images">
            </div>
            <div class="product-name">${Products.name}</div>
            <div style=" display: flex; align-items: center;">
                <img class="product-rating" src="images/rating/rating-${(Products.rating.stars)*10}.png" alt="4.5 star">
                <span style="margin-left: 6px; font-size: 17px; cursor: pointer; color: rgb(42, 124, 182);">${Products.rating.review}</span>
            </div>
            <div style="margin: 11px 0px;"><strong>$${((Products.priceCents)/100).toFixed(2)}</strong></div>
            <select id="cars">
                <option value="qty">Qty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button class="addtocart-button">Add to Cart</button>

        </div>`
    productHTML+=html;
 })
 document.querySelector('.landingPage-Grid').innerHTML=productHTML