/*
 * This function loads product data and returns it for use in the UI.
 */
const products = [{
    "id": 1,
    "sku": "DEMO001",
    "name": "Best Latte",
    "description": "Look at this latte.",
    "image": "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?auto=format&fit=crop&w=600&h=600&q=80",
    "amount": 1000,
    "currency": "USD"
  },
  {
    "id": 2,
    "sku": "DEMO002",
    "name": "Cafe Mocha",
    "description": "All great Mocha's.",
    "image": "https://images.unsplash.com/photo-1530032582480-edd739014c39?auto=format&fit=crop&w=600&h=600&q=80",
    "amount": 1500,
    "currency": "USD"
  }
]

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};