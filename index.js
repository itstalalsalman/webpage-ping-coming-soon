// Wait for the document to be ready
$(document).ready(function() {
    // Add a click event handler for the form submit button
    $("#btn__submit").click(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
  
        // Get the value of the email input field
        const emailInput = $("#email").val();
  
        // Email validation regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const errorMessage = $("#error-message");

  
        // Validate the email using the regular expression
        if (!emailPattern.test(emailInput)) {
            $("#email").css("border", "1px solid red");
            setTimeout(function() {
                $("#email").css("border", "1px solid #ccc");
            }, 3000);

            setTimeout(function() {
                $("#error__message").hide();
            }, 3000);
            errorMessage.text("Please provide a valid email address");
            errorMessage.show(); // Show the error message
            event.preventDefault(); // Prevent form submission
        } else {
            $("myForm").submit();
            errorMessage.hide(); 
        }   
    });
  });
  