$(document).ready(function() {
    $("form#myers-brigg_survey").submit(function(event) {
        event.preventDefault();
        $("#work-responses").show();
        console.log("#work-responses")
        $("input:checkbox[name=myers-brigg]:checked").each(function() {
          thinkies = $(this).val();
          console.log(thinkies);
        });
        var userResponses = [];
        console.log(userResponses);

        for(var i = 0; i < thinkies.length; ++i){
              if(i===0) {
              count=0};
              alert(count);
            if(thinkies[i] === 1) {
                count++;
        } else if (thinkies === -1 ) {
          count--;
        };
        };
      });
    });
