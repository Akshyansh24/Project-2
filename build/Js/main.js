$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 190) {
            $(".navv").addClass('stick_tab_1');
            $(".section-mobile-nav").addClass('stick_tab_1')
        } else {
            $(".navv").removeClass('stick_tab_1');
            $(".section-mobile-nav").removeClass('stick_tab_1')

        }
    })
})

$('.owl-one').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.owl-three').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2490,
    autoplayHoverPause:true,
    
    margin:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-five').owlCarousel({
    loop:true,
    // nav:true,
    // autoplay:false,
    // autoplayTimeout:2500,
    // autoplayHoverPause:true,
    
    margin:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        767:{
            items:2
        },
        1000:{
            items:1
        }
    }
})

window.onscroll = function() {
     scrollNav()
 };

 function scrollNav(){
    var scroll = document.getElementById("myp")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        myp.style.display='block' 
        myp.style.transition = '0.3s';
        } else {
        myp.style.display='none';
        myp.style.transition = '0.3s';
        }

 };

//  ============== Mobile Nav =======================

function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.body.style.overflowY = 'hidden';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.body.style.transition = '.5s ease';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflowY = 'scroll';
    document.body.style.backgroundColor = "white";
    document.body.style.transition = '.5s ease';
    
}

// ================= Catagory Bar ==================
function openCat() {
    document.getElementById("catSidebar").style.width = "320px";
    document.body.style.overflowY = 'hidden';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.body.style.transition = '.5s ease';
}

function closeCat() {
    document.getElementById("catSidebar").style.width = "0";
    document.body.style.overflowY = 'scroll';
    document.body.style.backgroundColor = "white";
    document.body.style.transition = '.5s ease';
}

// ================ Search Box ======================

function toggle_visibility(search_box_mobile) {
    var e = document.getElementById(search_box_mobile);
    if(e.style.display == 'block')
       e.style.display = 'none'
     else
       e.style.display = 'block';
     }

//  ------------Increment - Decrement --------------

  // for count
  var count = 1;
  var countEl = document.getElementById("count");
  var totalitems = 1;
  var price = 65.00;
  var discountPrice = 65;
  var totalvalue = discountPrice;
  document.getElementById('discount-price').innerHTML = discountPrice;

    function pluss(){

        if(totalitems <10){
            count++;
            countEl.value = count;
            totalitems++;
            price = price + discountPrice;
            document.getElementById('Cart-product-price').innerHTML = price;
            document.getElementById('total-items').innerHTML = totalitems;
            document.getElementById('total-value').innerHTML = price;
        }else{
            alert("Maximum 10 items");
        }
   
    }


 
  function minus(){
    if (count > 1) {
      count--;
      countEl.value = count;
      totalitems--;
      price = price - discountPrice ;
      document.getElementById('Cart-product-price').innerHTML = price;
      document.getElementById('total-items').innerHTML = totalitems;
      document.getElementById('total-value').innerHTML = price;
    }
  }
 
  console.log(totalitems);

    new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), {
        type : 'cover'
    } );