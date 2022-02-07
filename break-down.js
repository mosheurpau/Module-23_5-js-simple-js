const products = [
    { name: 'Iphone', price: 70000 },
    { name: 'Samsang phone', price: 60000 },
    { name: 'Dell Laptop', price: 50000 },
    { name: 'Hp Laptop', price: 65000 },
    { name: 'lenovo Laptop', price: 65000 },
    { name: 'Xaimue phone', price: 4500 },
    { name: 'I watch', price: 8000 },
    { name: 'plus one phone', price: 45000 }
];

/* for (const product of products) {
    if (product.price <= 5000) {
        break;
    }
    console.log(product);
}
console.log('After the loop.');
 */
for (const product of products) {
    if (product.price <= 10000) {
        continue;
    }
    console.log(product);
}
console.log('After the loop.');


