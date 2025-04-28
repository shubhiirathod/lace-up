// Add product to cart
function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add item to cart
    const product = { name, price, image };
    cart.push(product);
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();
    
    // Show the cart popup
    showCart();
}

// Update the cart count in the navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Show the cart popup
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items-list');

    // Clear the cart items list
    cartItemsList.innerHTML = '';

    // Add cart items to the list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    // Show the popup
    document.getElementById('cart-popup').style.display = 'flex';
}

// Close the cart popup
function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
}

// Proceed to checkout (for now, just alert the user)
function checkout() {
    alert('Proceeding to checkout...');
}

// Initialize cart count on page load
window.onload = function() {
    updateCartCount();
};
