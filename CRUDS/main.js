const productNameInput = document.getElementById('productNameInput');
const productCategoryInput = document.getElementById('productCategoryInput');
const productPriceInput = document.getElementById('productPriceInput');
const productDiscountInput = document.getElementById('productDiscountInput');
const productQuantityInput = document.getElementById('productQuantityInput');
const productDescriptionInput = document.getElementById('productDescriptionInput');
const addProductBtn = document.getElementById('addProductBtn');
const updateProductBtn = document.getElementById('updateProductBtn');
const searchInput = document.getElementById('searchInput');

let productContainer = [];

if(localStorage.getItem('product')){
    productContainer = JSON.parse(localStorage.getItem('product'));
    displayData()
}

function addProduct(){
    const productobd = {
        name: productNameInput.value,
        category: productCategoryInput.value,
        price: productPriceInput.value,
        discount: productDiscountInput.value,
        quantity: productQuantityInput.value,
        description: productDescriptionInput.value,
    }
    productContainer.push(productobd);
    localStorage.setItem('product', JSON.stringify(productContainer));
    displayData()
    clearProduct()
}

function displayData(){
    let show = ``;
    for (let i = 0; i < productContainer.length; i++){ 
        show += `
        <tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].discount}</td>
        <td>${productContainer[i].quantity}</td>
        <td>${productContainer[i].description}</td>
        <td><button class = "fas fa-pen-to-square btn btn-success" onclick = updateBtn(${i})></button></td>
        <td><button class = "fas fa-xmark btn btn-danger" onclick = deleteProduct(${i})></button></td>
        </tr>
        `
    }
    document.getElementById('showData').innerHTML = show;
}

function clearProduct(){
    productNameInput.value = "";
    productCategoryInput.value = "";
    productPriceInput.value = "";
    productDiscountInput.value = "";
    productQuantityInput.value = "";
    productDescriptionInput.value = "";
}

function deleteProduct(item){
    productContainer.splice(item, 1);
    localStorage.setItem('product', JSON.stringify(productContainer));
    displayData()
}

function searchProduct(textsearch){
    let show = ``;
    for (let i = 0; i < productContainer.length; i++){
        if(productContainer[i].name.toLowerCase().includes(textsearch.toLowerCase()) || productContainer[i].category.toLowerCase().includes(textsearch.toLowerCase()) || productContainer[i].price.toLowerCase().includes(textsearch.toLowerCase())){
        show += `
        <tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].discount}</td>
        <td>${productContainer[i].quantity}</td>
        <td>${productContainer[i].description}</td>
        <td><button class = "fas fa-pen-to-square btn btn-success" onclick = updateBtn(${i})></button></td>
        <td><button class = "fas fa-xmark btn btn-danger" onclick = deleteProduct(${i})></button></td>
        </tr>
        `
        }
    }
    document.getElementById('showData').innerHTML = show;
}

searchInput.addEventListener('input', ()=>{
    searchProduct(searchInput.value)
})

function updateBtn(item){
    productNameInput.value = productContainer[item].name;
    productCategoryInput.value = productContainer[item].category;
    productPriceInput.value = productContainer[item].price;
    productDiscountInput.value = productContainer[item].discount;
    productQuantityInput.value = productContainer[item].quantity;
    productDescriptionInput.value = productContainer[item].description;
}

function updateProduct(){
    const productobd = {
        name: productNameInput.value,
        category: productCategoryInput.value,
        price: productPriceInput.value,
        discount: productDiscountInput.value,
        quantity: productQuantityInput.value,
        description: productDescriptionInput.value,
    }
    for (let i = 0; i < productContainer.length; i++){
        if(productNameInput.value == productContainer[i].name)
            deleteProduct(i);}
    productContainer.push(productobd);
    localStorage.setItem('product', JSON.stringify(productContainer));
    displayData()
    clearProduct()
}