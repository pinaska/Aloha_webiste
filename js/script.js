$(document).ready(function(){
//adding the pop-up for preventing the empty subscription
$('form').on('submit', function(event){
    event.preventDefault();

    if ($("input[type='email']").val() == "") {
      alert("Please enter a valid email addres");
    } else {
      alert("Thanks for subscribing!");
    }
  });

//flickity
$('.main-carousel').flickity({
  // options
  wrapAround:true,
  contain: true,
  freeScroll: true
});

});
