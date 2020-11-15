// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour-it").on("click", function (event) {
    console.log("click");
    var id = $(this).data("id");
    var eatenBurger = $(this).data("eatenburger");
    console.log(eatenBurger);
    var newEatenBurger = {
      eaten: eatenBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenBurger
    }).then(
      function () {
        console.log("changed eaten to", eatenBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
