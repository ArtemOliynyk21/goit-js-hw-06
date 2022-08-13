const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);
console.log('');

items.forEach(item => {
    const nameCat = item.firstElementChild.textContent;
    console.log('Category:', nameCat);
    const quantityElement = item.lastElementChild.children.length;
    console.log('Elements:', quantityElement);
    console.log('');
})
