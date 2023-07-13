document.addEventListener('DOMContentLoaded', function() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const cartItems = [];
    let cartTotal = 0;

    function updateCart() {
        // Clear the existing cart items
        cartItemsElement.innerHTML = '';

        // Render the updated cart items
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = item.name + ' - $' + item.price.toFixed(2);
            cartItemsElement.appendChild(cartItemElement);
        });

        // Update the cart total
        cartTotalElement.textContent = '$' + cartTotal.toFixed(2);
    }

    function addToCart(name, price) {
        cartItems.push({ name, price });
        cartTotal += price;
        updateCart();
    }

    function clearCart() {
        cartItems.length = 0;
        cartTotal = 0;
        updateCart();
    }

    // Event listener for adding items to the cart
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const price = parseFloat(item.getAttribute('data-price'));
            addToCart(name, price);
        });
    });

    // Event listener for clearing the cart
    clearCartButton.addEventListener('click', () => {
        clearCart();
    });
});
