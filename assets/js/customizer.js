/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
    var api = wp.customize;
    /******** WordPress Core *********/

    // Site title
    api('blogname', function (value) {
        value.bind(function (newval) {
            $('.site-title').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    // Site description
    api('blogdescription', function (value) {
        value.bind(function (newval) {
            $('.site-description').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    // Content
    api('inkthemes_options[inkthemes_mainheading]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_mainheading h2').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[read_more_btn_text]', function (value) {
        value.bind(function (newval) {
            $('.read-button .read_more').text(newval).append('&nbsp;<i class="fas fa-caret-right"></i>');
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });


    // feature-box-sub-head
    api('inkthemes_options[inkthemes_headline1]', function (value) {
        value.bind(function (newval) {
            $('.content h6.inkthemes_headline1 a').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });


    api('inkthemes_options[inkthemes_headline2]', function (value) {
        value.bind(function (newval) {
            $('.content h6.inkthemes_headline2 a').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });


    api('inkthemes_options[inkthemes_headline3]', function (value) {
        value.bind(function (newval) {
            $('.content h6.inkthemes_headline3 a').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });


    api('inkthemes_options[inkthemes_headline4]', function (value) {
        value.bind(function (newval) {
            $('.content h6.inkthemes_headline4 a').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    // feature-box-description

    api('inkthemes_options[inkthemes_feature1]', function (value) {
        value.bind(function (newval) {
            $('div.inkthemes_feature1 p').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_feature2]', function (value) {
        value.bind(function (newval) {
            $('div.inkthemes_feature2 p').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_feature3]', function (value) {

        value.bind(function (newval) {
            $('div.inkthemes_feature3 p').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_feature4]', function (value) {

        value.bind(function (newval) {
            $('div.inkthemes_feature4 p').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    //widget-head
    api('inkthemes_options[inkthemes_col_head]', function (value) {
        value.bind(function (newval) {
            $('.feature_widget .inkthemes_col_head').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    //Blog-head


    api('inkthemes_options[inkthemes_blog_head]', function (value) {
        value.bind(function (newval) {
            $('h4.inkthemes_blog_head').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    //testimonial-section

    api('inkthemes_options[inkthemes_testimonial_main_head]', function (value) {
        value.bind(function (newval) {
            $('h2.inkthemes_testimonial_main_head').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });



    api('inkthemes_options[inkthemes_testimonial_main_desc]', function (value) {
        value.bind(function (newval) {
            $('h4.inkthemes_testimonial_main_desc').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });


    api('inkthemes_options[inkthemes_testimonial]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_testimonial p.testm_descbox').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_testimonial_2]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_testimonial_2 p.testm_descbox').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_testimonial_3]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_testimonial_3 p.testm_descbox').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });


    api('inkthemes_options[inkthemes_testimonial_name]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_testimonial .testimonial_name_wrapper').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_testimonial_name_2]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_testimonial_2 .testimonial_name_wrapper').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[inkthemes_testimonial_name_3]', function (value) {
        value.bind(function (newval) {
            $('.inkthemes_testimonial_3 .testimonial_name_wrapper').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    //First slider caption 
    api('inkthemes_options[colorway_slideheading1]', function (value) {
        value.bind(function (newval) {
            $('.salesdetails h5.colorway_slideheading1 a').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('inkthemes_options[colorway_slidedescription1]', function (value) {
        value.bind(function (newval) {
            $('.salesdetails p.colorway_slidedescription1').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    //Second slider caption 
    api('inkthemes_options[colorway_slideheading2]', function (value) {
        value.bind(function (newval) {
            $('.salesdetails h5.colorway_slideheading2 a').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('inkthemes_options[colorway_slidedescription2]', function (value) {
        value.bind(function (newval) {
            $('.salesdetails p.colorway_slidedescription2').text(newval);
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('display_header_text', function (value) {
        value.bind(function (to) {
            if (true === to) {
                $('.site-title').show();
            } else {
                $('.site-title').hide();
            }
        });
    });

    api('title_font_size', function (value) {
        value.bind(function (newval) {

            $('h1.site-title').css('font-size', newval + "px");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('desc_font_size', function (value) {
        value.bind(function (newval) {

            $('p.site-description').css('font-size', newval + "px");

            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('btn_rad', function (value) {
        value.bind(function (newval) {

            $('ul.sm.sm-mint li.colorway_button_html button').css('border-radius', newval + "px");
            $('ul.sm.sm-mint li.colorway_button_html span button').css('border-radius', '50%');
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('read_more_btn_rad', function (value) {
        value.bind(function (newval) {
            $('.read-button a.read_more').css('border-radius', newval + "px");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('header_v_pad', function (value) {
        value.bind(function (newval) {

            $('.header').css('padding', newval + "px 0");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('para_line_height', function (value) {
        value.bind(function (newval) {

            $('p').css('line-height', newval + "em");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('header_h_pad', function (value) {
        value.bind(function (newval) {

            $('.container').css('width', newval + "%");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('content_h_pad', function (value) {
        value.bind(function (newval) {

            $('.cyw-container').css('width', newval + "%");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('content_v_pad', function (value) {
        value.bind(function (newval) {

            $('.cw-content.container-fluid').css('padding-top', newval + "px");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('logo_width', function (value) {
        value.bind(function (newval) {

            $('.colorway_logo img').css('width', newval + "%");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });
    api('stky_logo_width', function (value) {
        value.bind(function (newval) {

            $('.colorway_logo_sticky img').css('width', newval + "%");
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[button_link_color]', function (value) {
        value.bind(function (newval) {
            $("ul.sm.sm-mint button a,ul.sm.sm-mint button").css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[button_link_hover_color]', function (value) {
        value.bind(function (newval) {
            $("ul.sm.sm-mint button a, ul.sm.sm-mint button").hover(function () {
                $(this).css("color", newval);
                $('.customize-partial-refreshing').css('opacity', 1);
            });
        });
    });
    api('inkthemes_options[button_bg_color]', function (value) {
        value.bind(function (newval) {
            $("ul.sm.sm-mint button").css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[header_bg_color]', function (value) {
        value.bind(function (newval) {

            $('.container-h').css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[site_title_color]', function (value) {

        value.bind(function (newval) {
            $('h1.site-title').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[site_tagline_color]', function (value) {
        value.bind(function (newval) {
            $('p.site-description').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });


    api('inkthemes_options[menu_link_color]', function (value) {
        value.bind(function (newval) {

            $('#menu .sm.sm-mint li.menu-item a, #menu .sm.sm-mint li.page_item  a, #menu .sm.sm-mint li.page_item  li a, #menu .sm.sm-mint li.menu-item li a:link').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[menu_background_color]', function (value) {
        value.bind(function (newval) {

            $('#menu .sm.sm-mint li.menu-item a, #menu .sm.sm-mint li.page_item  a, #menu .sm.sm-mint li.page_item  li a, #menu .sm.sm-mint li.menu-item li a:link').css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[theme_link_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content a, .elementor a').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[theme_para_color]', function (value) {
        value.bind(function (newval) {
            $(' .cw-content p').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[theme_h1_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content h1, .elementor h1').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[theme_h2_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content h2, .elementor h2').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[theme_h3_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content h3, .elementor h3').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[theme_h4_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content h4, .elementor h4').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[theme_h5_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content h5, .elementor h5').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[theme_h6_color]', function (value) {
        value.bind(function (newval) {
            $('.cw-content h6, .elementor h6').css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });


    api('inkthemes_options[footer_link_color]', function (value) {
        value.bind(function (newval) {
            $(".footer-navi a").css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[footer_link_color]', function (value) {
        value.bind(function (newval) {
            $(".footer a").css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[footer_link_color]', function (value) {
        value.bind(function (newval) {
            $(".footer-container .footer ul li a").css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });
    });

    api('inkthemes_options[footer_text_color]', function (value) {
        value.bind(function (newval) {
            $(".footer h1, .footer h2,.footer h3, .footer h4, .footer h5, .footer p ").css({'color': newval});
        });
        $('.customize-partial-refreshing').css('opacity', 1);

    });

    api('inkthemes_options[footer_header_color]', function (value) {
        value.bind(function (newval) {
            $(".footer h6").css({'color': newval});
        });
        $('.customize-partial-refreshing').css('opacity', 1);

    });

    api('inkthemes_options[footer_col_bg_color]', function (value) {
        value.bind(function (newval) {
            $(".footer-container").css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });
    api('inkthemes_options[bottom_footer_bg_color]', function (value) {
        value.bind(function (newval) {
            $(".footer-navi").css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[read_btn_bg_color]', function (value) {
        value.bind(function (newval) {
            $(".read-button a.read_more").css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[read_btn_txt_color]', function (value) {
        value.bind(function (newval) {
            $(".read-button a.read_more").css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[read_btn_hover_bg_color]', function (value) {
        value.bind(function (newval) {
            $(".read-button a.read_more:hover").css({'background-color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

    api('inkthemes_options[read_btn_hover_txt_color]', function (value) {
        value.bind(function (newval) {
            $(".read-button a.read_more:hover").css({'color': newval});
            $('.customize-partial-refreshing').css('opacity', 1);
        });

    });

//    api('inkthemes_options[read_more_btn_border]', function (value1) {
//        value1.bind(function (newval1) {
//            console.log(typeof(newval1));
//            if (newval1 !== 'off') {
//                console.log('inn');
//                api('inkthemes_options[read_btn_border_color]', function (value) {
//                    value.bind(function (newval) {
//                        $(".read-button a.read_more").css({'border': '1px solid' + newval});
//                        $('.customize-partial-refreshing').css('opacity', 1);
//                    });
//                });
//            }
//        })
//    });

    //menu-on-off
    api('footer-layout', function (value) {
        value.bind(function (to) {
            switch (to) {
                case 'inline-footer':
                    $('.footer-navi').show();
                    $("#inline1").addClass("col-md-5 col-sm-5");
                    $("#inline2").addClass("col-md-3 col-sm-3");
                    $("#inline3").addClass("col-md-4 col-sm-4");
                    $('.navigation').removeClass("col-md-12 footer-center");
                    $('.social-icons').removeClass("col-md-12 footer-center");
                    $('.right-navi').removeClass("col-md-12 footer-center");
                    $('.footer-container').css("margin-bottom", "0");
                    break;
                case 'center-footer':
                    $('.footer-navi').show();
                    $("#inline1").removeClass("col-md-5 col-sm-5");
                    $("#inline2").removeClass("col-md-3 col-sm-3");
                    $("#inline3").removeClass("col-md-4 col-sm-4");
                    $(".right-navi").removeClass("copy-text");
                    $('.navigation').addClass("col-md-12 footer-center");
                    $('.social-icons').addClass("col-md-12 footer-center");
                    $('.right-navi').addClass("col-md-12 footer-center");
                    $('.footer-container').css("margin-bottom", "0");
                    break;
                case 'diable-footer':
                    $('.footer-navi').hide();
                    $('.container-fluid.foot-content.footer-container ').css("margin-bottom", "0px");
                    $('.container.footer-container ').css("margin-bottom", "60px");
            }

        });
    });


    api('inkthemes_options[logo_option]', function (value) {
        value.bind(function (to) {
            if (to !== false) {

                $('a.colorway_logo').css('display', 'block');
            } else {

                $('a.colorway_logo').css('display', 'none');
            }
        });
    });

    api('inkthemes_options[colorway_sticky_header]', function (value) {
        value.bind(function (to) {
            console.log(to);
            if (to !== false) {
                jQuery('.border').css("display", "none");
                jQuery(window).on("scroll", function (e) {
                    if (jQuery('.container-h.container-fluid').width() > 0) {
                        if (jQuery(window).scrollTop() > 0) {
                            jQuery('.container-h.container-fluid').addClass('is-sticky');
                            jQuery('.container-h.container-fluid.is-sticky').css({"position": "fixed", "width": "100%", "z-index": "999", "box-shadow": "0 2px 4px rgba(0,0,0,0.1)", "-webkit-font-smoothing": "subpixel-antialiased"});
                            jQuery('.container-h.container-fluid.is-sticky .border').css({"display": "none"});
//                            jQuery('.cw-content.container-fluid').css({"padding-top": "160px"});
                            api('inkthemes_options[header_bg_color]', function (value) {
                                value.bind(function (too) {
                                    if (to !== '') {
                                        jQuery('.container-h.container-fluid.is-sticky').css({"background-color": too});
                                    } else {
                                        jQuery('.container-h.container-fluid.is-sticky').css({"background-color": "#fff"});
                                    }
                                });
                            });
                        } else {
                            jQuery('.container-h.container-fluid').removeClass('is-sticky');
                            jQuery('.container-h.container-fluid').css({"position": "fixed", "width": "100%", "box-shadow": "none", "z-index": "999", "-webkit-font-smoothing": "subpixel-antialiased", "border-bottom": "1px solid rgba(183, 183, 183, 0.31)"});
                            api('content_v_pad', function (val) {
                                val.bind(function (nval) {
                                    jQuery('.cw-content.container-fluid').css({"padding-top": nval + "px"});
                                });
                            });
                            jQuery('.container-h.container-fluid .border').css({"display": "none"});
                        }
                    }
                });
            } else {

                jQuery(window).on("scroll", function (e) {
                    jQuery('.container-h.container-fluid').removeClass('is-sticky');
                    jQuery('.container-h.container-fluid').css({"position": "inherit", "width": "100%", "z-index": "999", "border-bottom": "none"});
                    api('content_v_pad', function (val) {
                        val.bind(function (nval) {
                            jQuery('.cw-content.container-fluid').css({"padding-top": nval + "px"});
                        });
                    });
                    jQuery('.container-h.container-fluid').css({"border-bottom": "none"});

                    jQuery('.container-h.container-fluid .border').css("display", "block");
                });
            }
        });
    });

})(jQuery);
