document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 8 },
        { id: 3, name: 'Pasta', price: 12 },
        { id: 4, name: 'Salad', price: 7 },
        { id: 5, name: 'Sushi', price: 15 },
        { id: 6, name: 'Sandwich', price: 6 }
    ];

    const menuContainer = document.getElementById('menu-items');
    const orderSummaryContainer = document.getElementById('order-summary');
    const placeOrderButton = document.getElementById('place-order');
    let order = [];

    function displayMenu() {
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="addToOrder(${item.id})">Add to Order</button>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    function addToOrder(id) {
        const item = menuItems.find(item => item.id === id);
        order.push(item);
        displayOrderSummary();
    }

    function displayOrderSummary() {
        orderSummaryContainer.innerHTML = '';
        let total = 0;
        order.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            `;
            orderSummaryContainer.appendChild(orderItem);
            total += item.price;
        });

        const totalDiv = document.createElement('div');
        totalDiv.classList.add('order-item');
        totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
        orderSummaryContainer.appendChild(totalDiv);
    }

    displayMenu();

    placeOrderButton.addEventListener('click', () => {
        alert('Order placed successfully!');
        order = [];
        displayOrderSummary();
    });
});

// Exposing addToOrder function to global scope
window.addToOrder = addToOrder;
