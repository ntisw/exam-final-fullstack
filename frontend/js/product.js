$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData() {
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        $.get(`http://localhost:8080/api/products`, function (data, status) {
            console.log(status);
            if (status === 'success') {
                console.log(data);
                data.forEach(element => {
                    var serialno = element.serialno;  
                    var name = element.name;
                    var category = element.category;
                    var price = element.price;
                    var photo = element.photo;
                    var item = `<tr>
                    <td><img src="${photo}" height="30px" alt="picture"></td>
                    <td>${serialno}</td>
                    <td>${name}</td>
                    <td>${category}</td>
                    <td>${price}</td>
                    <td><a href="productdetail.html?pid=${element._id}" class="btn btn-primary" >
                    View detail
                    </a></td>
                    </tr>`;
                    $("#plist").append(item);
                });
            }
        });
        // ===============================
    }

    // Update photo when URL has changed
    $("#photo").change(function () {
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
        $.post(`http://localhost:8080/api/products`, newproduct, function (result) {
            console.log(result);
        });
        // ===============================

    });
})