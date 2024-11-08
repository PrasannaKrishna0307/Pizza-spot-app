document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.order-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const pizza = form.pizza.value;
        const quantity = form.quantity.value;
        const pizzaDetails = pizzas.find(p => p.name === pizza);
        addToCart(pizzaDetails.name, pizzaDetails.price, quantity);
        alert(`Order placed successfully! \nName: ${name} \nPizza: ${pizzaDetails.name} \nQuantity: ${quantity}`);
    });
});

let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    cartElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartElement.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
