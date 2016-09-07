$( document ).ready(function() {
    $("#CTA").click(function() {
        $(".form").slideDown(250).css('display','flex');
        
        // if form is visible
        if ($(".form").is(":visible")) {
            
            // change .cta cursor to default + Remove Gradient
            $("#CTA").css('cursor', 'default').css('background','hsla(28, 100%, 50%, 1)');
            
            // darken background color
            $('#optin-bg').css('background', 'hsla(0, 0%, 21%, 1)').addClass('all-white');
        }
        $(".form__email").focus();
	 });
    
    $(".nav__button").click(function() {
    $('html, body').animate({
        scrollTop: $("#optin-bg").offset().top
    }, 750);
});
});