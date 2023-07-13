document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const cartCountElement = document.getElementById('cart-count');
    const cartPriceElement = document.getElementById('cart-price');
    let itemCount = 0;
    let totalPrice = 0;

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const price = parseFloat(item.getAttribute('data-price'));
            itemCount++;
            totalPrice += price;
            cartCountElement.textContent = itemCount;
            cartPriceElement.textContent = totalPrice.toFixed(2);

            // Show cart count and cart price
            cartCountElement.style.display = 'block';
            cartPriceElement.style.display = 'block';
        });
    });
});