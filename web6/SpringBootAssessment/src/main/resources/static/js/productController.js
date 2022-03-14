//Doing a Product web app, in product page to 
//display the name, description, imageUrl, style, price, ..., ...,.....,....


const createHTMLList = (index, title, description, date) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a id="${index}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
    </div>
</div>
</div>

`;


function displayProductDetails(item) {
    document.querySelector("#modalTitle").innerText = item.title;
    document.querySelector("#modalDescription").innerText = item.description;
    document.querySelector("#modalDate").innerText = item.date;

}


class ProductsController {
    constructor() {
        this._items = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addItem(title, description, date) {
        const itemObj = {

            let productController = this;
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('date', date);

            fetch('http://localhost:8090/item/add', {
                 method: 'POST',
                 body: formData
                 })
                 .then(function(response) {
                     console.log(response.status); // Will show you the status
                     if (response.ok) {
                         alert("Successfully Added Product!")
                     }
                 })
                 .catch((error) => {
                     console.error('Error:', error);
                     alert("Error adding item to Product")
                 });
        };

        this._items.push(itemObj);
    }

    displayItem() {
        var productController = this;
        productController._items = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8080/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                        title: item.title,
                        description: item.description,
                        date: item.date,
                   };
                    productController._items.push(itemObj);
              });

              productController.renderProductPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    renderProductPage() {
            var productHTMLList = [];

            for (var i=0; i<this._items.length; i++)
            {
                const item = this._items[i];            //assign the individual item to the variable

                const productHTML = createHTMLList(i, item.title, item.description, item
                .date);

                productHTMLList.push(productHTML);
            }

            //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#row').innerHTML = pHTML;


            //addEventListener - click
            for (var i=0; i<this._items.length; i++)
            {
                const item = this._items[i];
                document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
            }
        }


}   //End of ProductsController class
