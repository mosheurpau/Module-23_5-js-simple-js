const products = [
    { name: 'Iphone', price: 70000 },
    { name: 'Samsang phone', price: 60000 },
    { name: 'Dell Laptop', price: 50000 },
    { name: 'Hp Laptop', price: 65000 },
    { name: 'lenovo Laptop', price: 65000 },
    { name: 'Xaimue phone', price: 55000 },
    { name: 'I watch', price: 8000 },
    { name: 'plus one phone', price: 45000 }
];

function serchProducts(products, seatchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(seatchText)) {
            result.push(product);
        }
    }
    return result;
}
const matched = serchProducts(products, 'phone');
console.log(matched);