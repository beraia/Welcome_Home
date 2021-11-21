// Burger ------------------------------------------------------------------------------------
let burger = document.getElementById('menu-icon');
let navigation = document.getElementById('nav');
let body = document.getElementById('body');
burger.addEventListener('click', function(){
    this.classList.toggle('active');
    ul.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
});

// Header ------------------------------------------------------------------------------------
$(window).on('scroll', function(){
    if ($(window).scrollTop() > 180){
      $('header').addClass('attached');;
    }
    else
    {
      $('header').removeClass('attached');
    }
});

// Get the space modal ------------------------------------------------------------------------
var space_modal = document.getElementById("space_modal");
var closeModalSpace = document.getElementById("closeModalSpace");
var closeSpaceModal = document.getElementById("close_space_modal");

function showModalSpace(id){
  var element=document.getElementById(id);

  var cozy_area_value = element.getAttribute("data-cozy")+"<span>m<sup>2</sup></span>";
  var cozy_area = document.getElementById("cozy_area");
  cozy_area.innerHTML = cozy_area_value;

  var comfy_area_value = element.getAttribute("data-comfy")+"<span>m<sup>2</sup></span>";
  var comfy_area = document.getElementById("comfy_area");
  comfy_area.innerHTML = comfy_area_value;

  var cushy_area_value = element.getAttribute("data-cushy")+"<span>m<sup>2</sup></span>";
  var cushy_area = document.getElementById("cushy_area");
  cushy_area.innerHTML = cushy_area_value;

  var homey_area_value = element.getAttribute("data-homey")+"<span>m<sup>2</sup></span>";
  var homey_area = document.getElementById("homey_area");
  homey_area.innerHTML = homey_area_value;

  space_modal.style.display = "block";
  closeModalSpace.onclick = function(){
    space_modal.style.display = "none";
  }
  closeSpaceModal.onclick = function(){
    space_modal.style.display = "none";
  }
}

//Get The price modal ------------------------------------------------------------------------
var price_modal = document.getElementById("price_modal");
var closeModalprice = document.getElementById("closeModalPrice");
var closePriceModal = document.getElementById("close_price_modal");

function showModalPrice(id){
  var element = document.getElementById(id);

  var price_12_value = element.getAttribute("data-12month")+"<span> / $</span>";
  var price_12 = document.getElementById("price_12");
  price_12.innerHTML = price_12_value;

  var price_9_value = element.getAttribute("data-9month")+"<span> / $</span>";
  var price_9 = document.getElementById("price_9");
  price_9.innerHTML = price_9_value;

  var price_6_value = element.getAttribute("data-6month")+"<span> / $</span>";
  var price_6 = document.getElementById("price_6");
  price_6.innerHTML = price_6_value;

  var price_3_value = element.getAttribute("data-3month")+"<span> / $</span>";
  var price_3 = document.getElementById("price_3");
  price_3.innerHTML = price_3_value;

  price_modal.style.display = "block";
  price_modal.style.display = "block";
  closeModalprice.onclick = function(){
    price_modal.style.display = "none";
  }
  closePriceModal.onclick = function(){
    price_modal.style.display = "none";
  }
}

// Slider ----------------------------------------------------------------------
$(function() {
	var inWrap = $('.inner-wrapper');
	$('.prev').on('click', function(){
		inWrap.animate({left: '0%'}, 500, function(){
			    inWrap.css('left', '-100%');
		    	$('.slide').first().before($('.slide').last());
			});
	});
	$('.next').on('click', function(){
		inWrap.animate({left: '-200%'}, 500, function(){
				inWrap.css('left', '-100%');
				$('.slide').last().after($('.slide').first());
			});
	});
});

// Animation --------------------------------------------------------------------
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 1800){
    $('.animated-item').each(function(i){
      setTimeout(function(){
        $('.animated-item').eq(i).addClass('is-visible');
      }, 500 * i)
    });
  };
});