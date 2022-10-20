//Product constructor
function Product(pname, pprice, pcategory, pdescription) {
    this.pname = pname;
    this.pprice = pprice;
    this.pcategory = pcategory;
    this.pdescription = pdescription;
}


// UI Constructor
function UI() { }

UI.prototype.addProductToList = function (product) {
    const list = document.getElementById('product-list');
    //Create new tr
    const row = document.createElement('tr');

    row.className = 'row'
    //Insert the td
    row.innerHTML = `
    <td>${product.pname}</td>
    <td>${product.pprice}</td>
    <td>${product.pcategory}</td>
    <td>${product.pdescription}</td>
    <td><a class="update">Update</a></td>
    <td><a class="delete">Delete</a></td>
    `;

    list.appendChild(row)
}
UI.prototype.clearfields = function () {
    document.getElementById('pname').value = '';
    document.getElementById('pprice').value = '';
    document.getElementById('pcategory').value = '';
    document.getElementById('pdescription').value = '';
}

//Delete Product
UI.prototype.deleteProduct = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}



//Event Listners
document.getElementById('form').addEventListener('submit', function (e) {
    // Get form values
    const pname = document.getElementById('pname').Value,
        pprice = document.getElementById('pprice').value,
        pcategory = document.getElementById('pcategory').value,
        pdescription = document.getElementById('pdescription').value



    // Instantiate product
    const product = new Product(pname, pprice, pcategory, pdescription);

    // // Instantiate UI
    const ui = new UI();

    //Add product to list
    ui.addProductToList(product)

    //Clear field
    ui.clearfields();

    e.preventDefault();
})


// Event Listener for delete
document.getElementById('product-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteProduct(e.target);

})