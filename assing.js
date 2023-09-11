const productNameInput = document.getElementById('product-name');
const productQuantityInput = document.getElementById('product-quantity');
const addProductButton = document.getElementById('add-product-button');
const productList = document.getElementById('product-list');
const products = [];

addProductButton.addEventListener('click', () => {
    const productName = productNameInput.value.trim();
    const productQuantity = productQuantityInput.value.trim();

    if (productName && productQuantity) {
        const product = {
            name: productName,
            quantity: productQuantity,
        };

        products.push(product);

        displayProducts();

        // Clear the input fields
        productNameInput.value = '';
        productQuantityInput.value = '';
    }
});

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function displayProducts() {
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <span>${product.name} - Quantity: ${product.quantity}</span>
            <span class="delete-button" onclick="deleteProduct(${index})">Delete</span>
        `;

        productList.appendChild(productDiv);
    });
}
