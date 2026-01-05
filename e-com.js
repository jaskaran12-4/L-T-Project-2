function addToCart(button) {
     alert("add successfully");
    const product = {
        name: button.dataset.name,
        price: button.dataset.price
       
    };

    console.log("🛒 Product Added to Cart");
    console.log(product);
}