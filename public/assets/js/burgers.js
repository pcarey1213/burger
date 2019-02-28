// Make sure we wait to attach our handlers until the DOM is fully loaded.
 $(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newMeal = $(this).data("eaten");

    var newMeal = {
      devoured: newMeal
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newMeal
    }).then(
      function() {
        console.log("changed burger status to", newMeal);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("add a new Burger")
        location.reload();
      }
    );
  });
});