const productsControl = new ProductsController();
var storeImage = ""

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemDate = document.querySelector('#newItemdate');

    /*
        Do the Validation code here
    */

    // Get the values of the inputs - variable names to be same as MySQL columns
    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const date = newItemDate.value;


    // Clear the form
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemDate.value = '';

    // Add the task to the task manager
    productsControl.addItem(title, description, date);

});




