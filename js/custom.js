// Preloader 
jQuery(function (jQuery) {
    //Preloader
    var preloader = jQuery('.preloader');
    jQuery(window).load(function () {
        preloader.remove();
    });
});
// Wow 
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
})
wow.init();
// Bootstrap Slider 
jQuery('.carousel').carousel({
    interval: 20000
});
/**** owl carousel ****/
jQuery(document).ready(function () {
    var owl = jQuery("#testi-demo");
    owl.owlCarousel({
        itemsCustom: [
                [767, 1]
                , [992, 1]
                , [1200, 1]
                , [1500, 1]]
        , navigation: false
        , pagination: true
        , slideSpeed: 1000
        , scrollPerPage: true
        , autoPlay:true
    });
});

jQuery(document).ready(function () {
    var owl = jQuery("#project-demo");
    owl.owlCarousel({
        itemsCustom: [
                [767, 3]
                , [992, 3]
                , [1200, 3]
                , [1500, 3]]
        , navigation: false
        , pagination: true
        , slideSpeed: 1000
        , scrollPerPage: true
        , autoPlay:true
    });
});
/**** Blank p remove ****/
jQuery(document).ready(function(){
	jQuery('p').each(function() {
	var $this = jQuery(this);
	if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
	$this.remove();
	});
    });
       
    /**** Textarea First Letter Capital ****/
jQuery('textarea.form_control1,textarea.form_control2,textarea.form_control3,textarea.form_control4').on('keypress', function(event) {
   
	var $this = jQuery(this),
	thisVal = $this.val(),
	FLC = thisVal.slice(0, 1).toUpperCase();
	con = thisVal.slice(1, thisVal.length);
	jQuery(this).val(FLC + con);
});
    /**** Contact Page ****/
    
     jQuery(".form_control3").on("focusout load", function() {
    if (jQuery(this).val() != "") {
      jQuery(this).siblings("label").addClass("has-content");
    } else {
      jQuery(this).siblings("label").removeClass("has-content");
    }
  });


