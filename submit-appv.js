// $(document).ready(function () {


//   $("#scheduleForm").on("submit", function (e) {
//     e.preventDefault();

//     var formData = new FormData(this);

//     $.ajax({
//       url: "assets/php/send-mail.php",
//       type: "post",
//       data: formData,
//       processData: false,
//       contentType: false,
//       success: function (status) {
//         $("#success-text-1").show();
//       },
//       error: function(XMLHttpRequest, textStatus, errorThrown) {
//         $("#success-text-1").hide();
//         $("#error-text-1").show();
//         alert(errorThrown);
//       }
//     });
//   });
  
// });




$(document).ready(function() {
  $('#scheduleForm').submit(function(event) {
      event.preventDefault(); 


      var formData = $(this).serialize();

      $.ajax({
          type: 'POST',
          url: 'assets/php/send-mail.php', 
          data: formData,
          success: function(response) {
              
              $('.success-message-3').show();
              $('#error-text-1').hide(); 
              $('#success-text-1').text('Thank you! Your submission has been received!');
          },
          error: function(xhr, status, error) {
              
              $('.error-message').show();
              $('#success-text-1').hide();
              $('#error-text-1').text('Oops! Something went wrong while submitting the form.');
          }
      });
    });
});