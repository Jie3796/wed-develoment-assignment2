$(document).ready(function() {
    // Switch tabs
    $(".tab-item").click(function() {
      // Remove the currently active tab style
      $(".tab-item").removeClass("active");
      $(".tab").removeClass("active-tab");

      // Add new tab style
      $(this).addClass("active");
      var tabId = $(this).index();
      $(".tab").eq(tabId).addClass("active-tab");
    });

    // Handle the submit event of the login form
    $("#login-form").submit(function(event) {
      event.preventDefault(); // Prevent form default submission behavior

      var username = $("#username").val();
      var password = $("#password").val();
      if (username == '') {
          alert('The user name cannot be empty')
      } else if (password=='') {
          alert('The password cannot be empty')
      } else {
         // login verification
      if (username === $("#new-username").val() && password === $("#new-password").val()) {
        alert("Login successful！");
         window.location.href = "./index.html";
      } else {
        alert("Login failed: Incorrect username or password！");
      }
      }
     

     

      });
    });

    // Handling the submission event of the registration form
    $("#register-form").submit(function(event) {
      event.preventDefault(); // Prevent form default submission behavior

      var newUsername = $("#new-username").val();
      var newPassword = $("#new-password").val();
      if (newUsername=='') {
       alert('The user name cannot be empty')
      } else if(newPassword=='') {
         alert('The password cannot be empty')
      } else {
        // Send registration request to server
      $.post("/register", { username: newUsername, password: newPassword }, function (response) {
        const responses = JSON.parse(response);
        // Handle registration response
        if (responses.success) {
          alert("Registration successful!");

          // Automatically fill in the login form after successful registration
          $("#username").val(newUsername);
          $("#password").val(newPassword);
        } else {
          alert("Registration failed:" + response.message);
        }
      });
     }
      
    });
  