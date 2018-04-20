$(document).ready(function(){
//adding items to cart
var cartItems = 0;
$('.add-to-cart').click(function(){
    cartItems++;
    $(".cart-items").css('visibility', 'visible');
    $('.cart-items').html(cartItems);
});





//adding the pop-up for preventing the empty subscription
$('form').on('submit', function(event){
    event.preventDefault();

    if ($("input[type='email']").val() == "") {
      alert("Please enter a valid email addres");
    } else {
      alert("Thanks for subscribing!");
    }
  });

//flickity carusel
$('.main-carousel').flickity({
  // options
  // wrapAround:true,
  contain: true,
  freeScroll: true
});

//smooth scrolling
});
