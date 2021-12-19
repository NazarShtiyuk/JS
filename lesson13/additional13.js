// let button = document.getElementsByTagName('button');
let formItem = document.forms['formItem'];
let itemsArr = [];
localStorage.setItem('items', JSON.stringify(itemsArr));
formItem.btn.onclick = function (e) {
    e.preventDefault();
    let item = {
        nameItem: formItem.name.value,
        countItem: formItem.count.value,
        priceItem: formItem.price.value,
        photoItem: formItem.photo.value
    }
    itemsArr = JSON.parse(localStorage.getItem('items'));
    itemsArr.push(item);
    localStorage.setItem('items', JSON.stringify(itemsArr));
    formItem.name.value = '';
    formItem.count.value = '';
    formItem.price.value = '';
    formItem.photo.value = '';
}
