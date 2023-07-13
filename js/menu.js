
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const cartCountElement = document.getElementById('cart-count');
    const cartPriceElement = document.getElementById('cart-price');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));
  
        // Add item to the cart
        cartItems.push({ name, price });
        totalPrice += price;
  
        // Update cart count and price
        cartCountElement.textContent = cartItems.length;
        cartPriceElement.textContent = `₱ ${totalPrice.toFixed(2)}`;
  
        // Store cart items and total price in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
      });
    });
  
    const clearCartButton = document.getElementById('clear-cart');
    clearCartButton.addEventListener('click', () => {
      // Clear cart items and update cart count and price
      cartItems.length = 0;
      totalPrice = 0;
      cartCountElement.textContent = 0;
      cartPriceElement.textContent = `₱ 0.00`;
  
      // Clear cart items and total price from localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('totalPrice');
    });
  });
  