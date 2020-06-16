// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
        console.log("Eating Burger");
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: true //This sets Devoured to true.
      }).then(
        function() {
          console.log("Eaten!");
          // Reload the page
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      console.log("Prepping Burger");
      var newBurger = {
        name: $("#br").val().trim(),
        devoured: false
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        location.reload());
        // function() {
        //   console.log("Burger Ready!");
        //   location.reload();
        // }
      
    });
  });
  