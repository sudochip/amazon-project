let productHTML='';
 const products=[
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
        stars: 4.5,
        count: 87
        },
        priceCents: 1090,
        keywords: [
        "socks",
        "sports",
        "apparel"
        ]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "images/intermediate-composite-basketball.jpg",
        name: "Intermediate Size Basketball",
        rating: {
        stars: 4,
        count: 127
        },
        priceCents: 2095,
        keywords: [
        "sports",
        "basketballs"
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
        stars: 4.5,
        count: 56
        },
        priceCents: 799,
        keywords: [
        "tshirts",
        "apparel",
        "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "images/black-2-slot-toaster.jpg",
        name: "2 Slot Toaster - Black",
        rating: {
        stars: 5,
        count: 2197
        },
        priceCents: 1899,
        keywords: [
        "toaster",
        "kitchen",
        "appliances"
        ]
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image: "images/6-piece-white-dinner-plate-set.jpg",
        name: "6 Piece White Dinner Plate Set",
        rating: {
        stars: 4,
        count: 37
        },
        priceCents: 2067,
        keywords: [
        "plates",
        "kitchen",
        "dining"
        ]
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "images/6-piece-non-stick-baking-set.webp",
        name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
        rating: {
        stars: 4.5,
        count: 175
        },
        priceCents: 3499,
        keywords: [
        "kitchen",
        "cookware"
        ]
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        image: "images/plain-hooded-fleece-sweatshirt-yellow.jpg",
        name: "Plain Hooded Fleece Sweatshirt",
        rating: {
        stars: 4.5,
        count: 317
        },
        priceCents: 2400,
        keywords: [
        "hoodies",
        "sweaters",
        "apparel"
        ]
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        image: "images/luxury-tower-set-6-piece.jpg",
        name: "Luxury Towel Set - Graphite Gray",
        rating: {
        stars: 4.5,
        count: 144
        },
        priceCents: 3599,
        keywords: [
        "bathroom",
        "washroom",
        "restroom",
        "towels",
        "bath towels"
        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        image: "images/liquid-laundry-detergent-plain.jpg",
        name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
        rating: {
        stars: 4.5,
        count: 305
        },
        priceCents: 2899,
        keywords: [
        "bathroom",
        "cleaning"
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        image: "images/knit-athletic-sneakers-gray.jpg",
        name: "Waterproof Knit Athletic Sneakers - Gray",
        rating: {
        stars: 4,
        count: 89
        },
        priceCents: 3390,
        keywords: [
        "shoes",
        "running shoes",
        "footwear"
        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        image: "images/women-chiffon-beachwear-coverup-black.jpg",
        name: "Women's Chiffon Beachwear Cover Up - Black",
        rating: {
        stars: 4.5,
        count: 235
        },
        priceCents: 2070,
        keywords: [
        "robe",
        "swimsuit",
        "swimming",
        "bathing",
        "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        image: "images/round-sunglasses-black.jpg",
        name: "Round Sunglasses",
        rating: {
        stars: 4.5,
        count: 30
        },
        priceCents: 1560,
        keywords: [
        "accessories",
        "shades"
        ]
    },
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        image: "images/women-beach-sandals.jpg",
        name: "Women's Two Strap Buckle Sandals - Tan",
        rating: {
        stars: 4.5,
        count: 562
        },
        priceCents: 2499,
        keywords: [
        "footwear",
        "sandals",
        "womens",
        "beach",
        "summer"
        ]
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        image: "images/blackout-curtain-set-beige.webp",
        name: "Blackout Curtains Set 4-Pack - Beige",
        rating: {
        stars: 4.5,
        count: 232
        },
        priceCents: 4599,
        keywords: [
        "bedroom",
        "curtains",
        "home"
        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        image: "images/men-slim-fit-summer-shorts-gray.jpg",
        name: "Men's Slim-Fit Summer Shorts",
        rating: {
        stars: 4,
        count: 160
        },
        priceCents: 1699,
        keywords: [
        "shorts",
        "apparel",
        "mens"
        ]
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        image: "images/electric-glass-and-steel-hot-water-kettle.webp",
        name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
        rating: {
        stars: 5,
        count: 846
        },
        priceCents: 3074,
        keywords: [
        "water boiler",
        "appliances",
        "kitchen"
        ]
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        image: "images/facial-tissue-2-ply-18-boxes.jpg",
        name: "Ultra Soft Tissue 2-Ply - 18 Box",
        rating: {
        stars: 4,
        count: 99
        },
        priceCents: 2374,
        keywords: [
        "kleenex",
        "tissues",
        "kitchen",
        "tissues box",
        "napkins"
        ]
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        image: "images/straw-sunhat.webp",
        name: "Straw Lifeguard Sun Hat",
        rating: {
        stars: 4,
        count: 215
        },
        priceCents: 2200,
        keywords: [
        "hats",
        "straw hats",
        "summer",
        "apparel"
        ]
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        image: "images/sky-flower-stud-earrings.webp",
        name: "Sterling Silver Sky Flower Stud Earrings",
        rating: {
        stars: 4.5,
        count: 52
        },
        priceCents: 1799,
        keywords: [
        "jewelry",
        "accessories",
        "womens"
        ]
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        image: "images/women-stretch-popover-hoodie-black.jpg",
        name: "Women's Stretch Popover Hoodie",
        rating: {
        stars: 4.5,
        count: 2465
        },
        priceCents: 1374,
        keywords: [
        "hooded",
        "hoodies",
        "sweaters",
        "womens",
        "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
        image: "images/bathroom-rug.jpg",
        name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
        rating: {
        stars: 4.5,
        count: 119
        },
        priceCents: 1250,
        keywords: [
        "bathmat",
        "bathroom",
        "home"
        ]
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        image: "images/women-knit-ballet-flat-black.jpg",
        name: "Women's Knit Ballet Flat",
        rating: {
        stars: 4,
        count: 326
        },
        priceCents: 2640,
        keywords: [
        "shoes",
        "flats",
        "womens",
        "footwear"
        ]
    },
    {
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        image: "images/men-golf-polo-t-shirt-blue.jpg",
        name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
        rating: {
        stars: 4.5,
        count: 2556
        },
        priceCents: 1599,
        keywords: [
        "tshirts",
        "shirts",
        "apparel",
        "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        image: "images/trash-can-with-foot-pedal-50-liter.jpg",
        name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
        rating: {
        stars: 4.5,
        count: 2286
        },
        priceCents: 8300,
        keywords: [
        "garbage",
        "bins",
        "cans",
        "kitchen"
        ]
    },
 ].forEach((Products)=>{
    let html=`<div class="product-block">
                <div class="image-div">
                    <img class="product-image" src="${Products.image}" alt="socks-images">
                </div>
                <div class="product-name">${Products.name}</div>
                <div style=" display: flex; align-items: center;">
                    <img class="product-rating" src="images/rating/rating-${(Products.rating.stars)*10}.png" alt="4.5 star">
                    <span style="margin-left: 6px; font-size: 17px; cursor: pointer; color: rgb(42, 124, 182);">${Products.rating.count}</span>
                </div>
                <div style="margin: 11px 0px;"><strong>$${((Products.priceCents)/100).toFixed(2)}</strong></div>
                <div>
                    <select id="${Products.id}">
                        <option value="1">Qty</option>
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
                </div>
                <button class="addtocart-button" data-product-id="${Products.id}">Add to Cart</button>

            </div>`
    productHTML+=html;
 })
document.querySelector('.landingPage-Grid').innerHTML=productHTML
