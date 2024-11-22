( function( $ ) {
	var WidgetHelloWorldHandler = function( $scope, $ ) {
		 // Anevo Grid Isotop

    // ============ Isotop Grid 5 ============
    var $grid_5 = $('.gridV5').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // filter items on button click
    $('.filter-button-isotop_5').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid_5.isotope({ filter: filterValue });
        $('.filter-button-isotop_5 button').removeClass('is-checked');
        $(this).addClass('is-checked');
    });

    // ============ Isotop Grid 5 ============
    var $grid_6 = $('.gridV6').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // filter items on button click
    $('.filter-button-isotop_6').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid_6.isotope({ filter: filterValue });
        $('.filter-button-isotop_6 button').removeClass('is-checked');
        $(this).addClass('is-checked');
    });


   
	};
    

    //Anevo dropdown menu handler


	var WidgetHelloWorldHandler4 = function( $scope, $ ) {

    var e = $(".main-header"),
        a = $(".button-up"),
        void_menu_height=1;
    $(window).on('load', function(){
        void_menu_height = $('.main-header').outerHeight(true);
    });
    if($('header').hasClass('main-header')){
            $(window).on("scroll", function() {

                $(e).offset().top > 200 ? ($(e).addClass("active-header"), $(a).fadeIn(300)) : ($(e).removeClass("active-header"), $(a).fadeOut(300))
            })
    }
     $(".main-header .header-button").on("click", function() {
        $(".header-button").toggleClass("open"), $(".navigation").toggleClass("is-open"), $("body").toggleClass("no-scroll")
    });

   
    $('.menu-item-has-children').append('<i class="anevo-arrow ti-arrow-down"></i>');
    var t = $(".menu-item-has-children .anevo-arrow");
    $(t).on("click", function(event) {
        var e = $(this).parent().children(".sub-menu");                
        event.stopPropagation();
        $(e).slideToggle(400);
       
        if( $(this).hasClass('ti-arrow-up') ){
            $(this).removeClass('ti-arrow-up').addClass('ti-arrow-down');
        }else{
            $(this).removeClass('ti-arrow-down').addClass('ti-arrow-up');
        }
    });
    var n = window.location.href;
    n = n.substring(0, -1 == n.indexOf("#") ? n.length : n.indexOf("#")), n = n.substring(0, -1 == n.indexOf("?") ? n.length : n.indexOf("?")), "" === (n = n.substr(n.lastIndexOf("/") + 1)) && (n = "portfolio-1.html"), $(".navigation-list li").each(function() {
        var e = $(this).find("a").attr("href");
        n == e && ("sub-menu" == $(this).parent("ul").attr("class") ? ($(this).addClass("sub-active-nav"), $(this).parents(".navigation-list li").addClass("active-nav")) : $(this).addClass("active-nav"))
    }), (new WOW).init(), $('a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var e = $(this.hash);
            if( $('body').hasClass('page')){                        
               if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                scrollTop: e.offset().top - void_menu_height
            }, 1e3), !1 
            }
            else{
                if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                scrollTop: e.offset().top
            }, 1e3), !1
            }
            
        }
    });
        
    }; 

    //anevo horizental menu

	var WidgetHelloWorldHandler1 = function( $scope, $ ) {

        $(window).on('resize', function () {
            var wWidth = $(this).width();
    
            var selectedMenu = $('.hm2 .s-menu'); // s-menu   nav  ul li a (this is the structur)
            if (wWidth > 991) {
                selectedMenu.addClass('menu-activated');
                $('.hm2 .menu-activated >nav >ul >li ul').addClass('sub-menu');
                $('.hm2 .menu-activated >nav >ul >li ul li:has(ul)').addClass('menu-item-has-children');
                $('.hm2 .menu-activated >nav >ul >li:has(ul)').addClass('menu-item-has-children has-submenu');
                $('.hm2 .prc-anim').addClass('prc-area');
    
            } else {
                $('.hm2 .menu-activated >nav >ul >li ul').removeClass('sub-menu');
                $('.hm2 .menu-activated >nav >ul li:has(ul)').removeClass('menu-item-has-children');
                $('.hm2 .menu-activated >nav >ul >li:has(ul)').removeClass('menu-item-has-children has-submenu');
                selectedMenu.removeClass('menu-activated');
                $('.prc-anim').removeClass('prc-area');
    
                $('.feature-item-area .left-feature').removeClass('left-feature');
            }
    
        }).resize();
    
        /*---------------------
        SlickNav menu Activation
        --------------------- */
        $('ul#mobile_menu').slicknav({
            'appendTo': '.responsive-menu-wrap',
            'label': 'MENU',
        });
        
        
    };
    
    // Make sure you run this code under Elementor..
	$( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/section-post-filter.default', WidgetHelloWorldHandler);
        elementorFrontend.hooks.addAction( 'frontend/element_ready/section-dropdown-menu.default', WidgetHelloWorldHandler4 );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/section-horizental-menu.default', WidgetHelloWorldHandler1 );
    } );
	
	


} )( jQuery );


