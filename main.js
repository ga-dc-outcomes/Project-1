  $(function(){
  var maxCards = $('.card').length;
  // turn card
  for (var i = 1; i <= maxCards; ++i) {
    $('._' + i).click(function(){
      $(this).addClass('flipped');
      $(this).find('.front').addClass('showingBack');
      $(this).find('.front').css("z-index", 0);
      $(this).css("z-index", i);
    });
  }
  // reset stack
  $('#reset button').click(function(){
    $('.card').removeClass('flipped');
    $('.card').find('.front').removeClass('showingBack');
    $('.card').find('.front').css("z-index", 2);
    for (var j = 0; j < maxCards; ++j) {
    $('.card:eq(' + j + ')').css("z-index", maxCards - j);
    }
  });
  // I need help with this part down
    var max_fields      = 20; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var create_flashCards = $(".create_flashCards")

    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input placeholder="Question" type="text" name="mytext[]"/><input placeholder="Answer"  type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
