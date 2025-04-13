function addItem() {
    const newItem = document.getElementById("newItemText");
    const newValue = document.getElementById("newItemValue");

    const option = document.createElement("option");
    option.textContent = newItem.value;
    option.value = newValue.value;

    const menu = document.getElementById("menu");
    menu.appendChild(option);

    newItem.value = '';
    newValue.value = '';
}