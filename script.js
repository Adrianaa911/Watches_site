const data = [
    {
        id: 1,
        name: "RLX Cosmograph Daytona Green Dial",
        img: "https://watchzz.com/wp-content/uploads/2024/03/6B70C49E-F339-46A4-FB63-E2EF08BB7686.jpg",
        price: 239,
        cat: "Dress,"
    },
    {
        id: 11,
        name: "Invicta Men's Pro Diver",
        img: "https://images-na.ssl-images-amazon.com/images/I/81l2HEC5X2L._AC_UL1500_.jpg",
        price: 83,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Diamond Gold Rolex Watch",
        img: "https://cdn.shopify.com/s/files/1/1117/3536/products/Rolex_grena1.jpg?v=1559891349",
        price: 399,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap",
        img: "https://d3d71ba2asa5oz.cloudfront.net/12024510/images/casio-mq-24-1b-1.jpg",
        price: 59,
        cat: "Sport",
    },
    {
        id: 5,
        name: "Garmin Venu SmartWatch GPS",
        img: "https://image.sportler.com/image/product/garmin/venu_2s/_d1390_garmin_venu_2s_2196686_652283.jpg",
        price: 189,
        cat: "Casual",
        },
        {
            id: 3,
            name: "Breitling Superocean Heritage",
            img: "https://zaeger.com.au/wp-content/uploads/2020/03/619.jpg",
            price: 350,
            cat: "Luxury",
        },
];

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayProducts = (filtredProducts) => {
    productsContainer.innerHTML = filtredProducts.map(product =>
        `
        <div class="product">
        <img src=${product.img}
         alt=""
        />
        <span class="name">${product.name}</span>
        <span class="priceText">${product.price}</span>
    </div>

        `
    ).join("");
};

displayProducts(data)

searchInput.addEventListener("keyup", (e)=>{
    const value = e.target.value.toLowerCase();

    if(value){

        displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))

    }else{
        displayProducts(data);
    }
});

const setCategories = () =>{
    const allCats = data.map(item=>item.cat);
    const categories = [
        "All",
    ...allCats.allCats.filter((item,i)=>{
        return allCats.indexOf(item) ===i;
    }),
    ];

    categoriesContainer.innerHTML = categories.map(cat =>
        `
        <span class="cat">${cat}</span>

        `).join("")


        categoriesContainer.addEventListener("click", (e) => {
            const selectedCat = e.target.textContent;

            selectedCat === "All" 
            ? displayProducts(data)
            : displayProducts(data.filter((item) => item.cat === selectedCat));
        });

};

const setPrices = () =>{
    const priceList = data.map((item) => item.price);
    const minPrice =  Math.min(...priceList)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceRange.value = maxPrice
    priceValue.textContent = "$" + maxPrice

priceRange.addEventListener("input", (e)=>{
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter(item=>item.price <= e.target.value))
})

};

setCategories();
setPrices();