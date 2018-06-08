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
  contain: true,
  freeScroll: true
});

//smooth scrolling src:https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    var navHeight = $('.full_nav').height();
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top  - navHeight
        }, 1000, function() {

        }
      );
      }
    }
  });
});
