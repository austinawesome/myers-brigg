$(document).ready(function() {
  $("form#myers-brigg_survey").submit(function(event) {
    event.preventDefault();
    $("#mb-responses").show();
    console.log("#mb-responses")
    var newArray = [];
    $("input:checkbox[name=myers-brigg]:checked").each(function() {
      var pass = $(this).val();
      newArray.push(pass);
    });
    var sum=0; var i=newArray.length; while(i--) sum += parseInt(newArray[i])
    if (sum >=1) {
      alert("you're an extrovert");
    } else if (sum < 0) {
      alert("You're an introvert")
    }
  });
});
