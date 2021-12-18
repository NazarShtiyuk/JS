// let button = document.getElementsByTagName('button');
let formItem = document.forms['formItem'];
let itemsArr = [];

formItem.btn.onclick = function (e) {
    let item = {
        nameItem: '',
        countItem: 0,
        priceItem: 0,
        photoItem: ''
    }
    e.preventDefault();
    item.nameItem = formItem.name.value;
    item.countItem = formItem.count.value;
    item.priceItem = formItem.price.value;
    item.photoItem = formItem.photo.value;
    itemsArr.push(item);
    console.log(itemsArr);
    localStorage.setItem('items', JSON.stringify(itemsArr));
}
