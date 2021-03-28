// Make sure to wait to attacht handlers until the DOM is fully loaded.

// Not sure why but the page does not load when clicking devoured
// Currently clicking reorder does nothing, and adding a burger does nothing


$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        //Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changeded devour to", newDevoured);
                //reload the page to get the updated list
                location.reload();
            }
        );
    });
});

$(".create-form").on("submit", function(event) {
    // Making sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send off the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Created a new Burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});