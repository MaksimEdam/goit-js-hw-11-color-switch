const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const UlItems = document.querySelector(`#ingredients`);



const addListItems = (array) => {
    const listArray = array.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    })
    UlItems.append(...listArray);
}

addListItems(ingredients);
