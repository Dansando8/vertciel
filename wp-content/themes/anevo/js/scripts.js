(function($) {

    "use strict";

    $(window).on("load", function() {
            $(".preloader").delay(900).fadeOut("slow"), setTimeout(function() {
                $("body").removeClass("no-scroll")
            }, 900)
        }),

        $(document).ready(function() {

            "use strict";
            
            if ($('.mhc').length > 0) {
                var e = $(".main-header"),
                    a = $(".button-up"),
                    void_menu_height = 1;
                $(window).on('load', function () {
                    void_menu_height = $('.main-header').outerHeight(true);
                });
                if ($('header').hasClass('main-header')) {
                    $(window).on("scroll", function () {

                        $(e).offset().top > 200 ? ($(e).addClass("active-header"), $(a).fadeIn(300)) : ($(e).removeClass("active-header"), $(a).fadeOut(300))
                    })
                }
                $(".main-header .header-button").on("click", function () {
                    $(".header-button").toggleClass("open"), $(".navigation").toggleClass("is-open"), $("body").toggleClass("no-scroll")
                });
                $('.menu-item-has-children').append('<i class="anevo-arrow ti-arrow-down"></i>');
                var t = $(".menu-item-has-children .anevo-arrow");
                $(t).on("click", function (event) {
                    var e = $(this).parent().children(".sub-menu");
                    event.stopPropagation();
                    $(e).slideToggle(400);

                    if ($(this).hasClass('ti-arrow-up')) {
                        $(this).removeClass('ti-arrow-up').addClass('ti-arrow-down');
                    } else {
                        $(this).removeClass('ti-arrow-down').addClass('ti-arrow-up');
                    }
                });
            }
            
                
            var n = window.location.href;
            n = n.substring(0, -1 == n.indexOf("#") ? n.length : n.indexOf("#")), n = n.substring(0, -1 == n.indexOf("?") ? n.length : n.indexOf("?")), "" === (n = n.substr(n.lastIndexOf("/") + 1)) && (n = "portfolio-1.html"), $(".navigation-list li").each(function () {
                
                if ($('.mhc').length > 0) {
                    var e = $(this).find("a").attr("href");
                n == e && ("sub-menu" == $(this).parent("ul").attr("class") ? ($(this).addClass("sub-active-nav"), $(this).parents(".navigation-list li").addClass("active-nav")) : $(this).addClass("active-nav"))
                }
            }), 
                
                
            (new WOW).init(), $('a[href*="#"]:not([href="#"])').on("click", function () {
                if ($('.mhc').length > 0) {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                        var e = $(this.hash);
                        if ($('body').hasClass('page')) {
                            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                                scrollTop: e.offset().top - void_menu_height
                            }, 1e3), !1
                        }
                        else {
                            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                                scrollTop: e.offset().top
                            }, 1e3), !1
                        }

                    }
                }

            }), $(".owl-carousel").owlCarousel({
                loop: !0,
                nav: !1,
                dots: !0,
                autoplay: !0,
                smartSpeed: 900,
                autoplayTimeout: 4e3,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            }), 
            $(".grid-item").magnificPopup({

                type: "image",
                gallery: {
                    enabled: !0
                },
                removalDelay: 400,
                mainClass: "mfp-fade",
                image: {
                    titleSrc: function(item) {
                        return '<a href="'+item.el.attr('data-source')+'">'+ item.el.attr('title') + '</a>';
                    }
                }

            })
        });
        $('#respond').addClass('comments-respond');






})(window.jQuery);