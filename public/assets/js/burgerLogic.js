$(function() {
  // button to add new burger to database
    $(".create-form").on("submit", function(event) {
      // prevenets a submit event
      event.preventDefault();
  
      var newBurger = {
        // takes the burger name and gets the input value
        name: $("#burger-name").val().trim(),
        // checks if the devoured bubble is marked and takes the value
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // sends data to data base to add
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // console.log("created new burger: " + newBurger);
          // reloads page, which gets new data from database
          location.reload();
        }
      );
    });


  // once the "change-devoured" button is clicked it will save new data in devoured state variable
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");

      console.log("this is the id" + id)
  
      var devouredState = {
        devoured: newDevour
      };
  
      // sends data to the database to update
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          // console.log("changed devoured to", newDevour);
          // page reloads, which means it automatically brings in updated data from db
          location.reload();
        }
      );
    });
  

  // Starting to make delete function  
      $(".delete-burger").on("click", function(event) {
        // gets id off the burger selected
        var id = $(this).data("id");
        
        var newDelete = $(this).data("newDelete");

        var deleted = { burger_id: newDelete };

        console.log("This is the id: " + id)
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
          data: deleted
        //  data: deleteState
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  