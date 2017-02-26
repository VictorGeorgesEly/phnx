var $ = jQuery.noConflict();
(function($) {
    $('html').on('loaded', function(){
        if(r.exec(window.location) == null) {
            var tl = new TimelineLite();
            tl.delay(1).to('.site-header-brand img', 1, {width:'120px', marginTop:'0', marginLeft:0})
                .to('#home .row, .site-header-main', 2, {autoAlpha:1})
                .to('#countdown_dashboard', 1, {autoAlpha:1});
        } else {
            $('.dash-primary > img').css({'margin-top':0, 'width':'300px'});
            $('.dash-secondary, .digit, #subscribeForm').css({'opacity':1});
        }
    });
})(jQuery);