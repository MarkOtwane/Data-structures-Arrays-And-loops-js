// program that iterates through an array of objects and filters based on certain properties.
const items = [
    {
        name:"laptop",
        price: 20000,
        isAvailable:true,
    },
    {
        name:"Monitor",
        price: 7000,
        isAvailable:false,
    },
    {
        name:"mouse",
        price: 600,
        isAvailable:true,
    },
    {
        name:"bag",
        price: 2000,
        isAvailable:true,
    }

];
const filteredProducts = items.filter(item => item.price >2000);
filteredProducts.forEach(product => {
    console.log(product.price);
    
})

