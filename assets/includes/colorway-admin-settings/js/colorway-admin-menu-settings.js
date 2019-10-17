/**
 * Install Colorway Sites
 *
 *
 * @since 1.2.4
 */

(function ($) {

    ColorwayThemeAdmin = {

        init: function () {
            this._bind();
        },

        /**
         * Binds events for the Colorway Theme.
         *
         * @since 1.0.0
         * @access private
         * @method _bind
         */
        _bind: function () {
            $(document).on('click', '.cwy-sites-notinstalled', ColorwayThemeAdmin._installNow);
            $(document).on('click', '.cwy-sites-inactive', ColorwayThemeAdmin._activatePlugin);
            $(document).on('wp-plugin-install-success', ColorwayThemeAdmin._activatePlugin);
            $(document).on('wp-plugin-installing', ColorwayThemeAdmin._pluginInstalling);
            $(document).on('wp-plugin-install-error', ColorwayThemeAdmin._installError);
        },

        /**
         * Plugin Installation Error.
         */
        _installError: function (event, response) {

            var $card = jQuery('.cwy-sites-notinstalled');

            $card
                    .removeClass('button-primary')
                    .addClass('disabled')
                    .html(wp.updates.l10n.installFailedShort);
        },

        /**
         * Installing Plugin
         */
        _pluginInstalling: function (event, args) {
            event.preventDefault();

            var $card = jQuery('.cwy-sites-notinstalled');

            $card.addClass('updating-message');
        },
        /**
         * Activate Success
         */
        _activatePlugin: function (event, response) {

            event.preventDefault();

            var $message = $('.cwy-sites-notinstalled');
            if (0 === $message.length) {
                $message = $('.cwy-sites-inactive');
            }

            // Transform the 'Install' button into an 'Activate' button.
            var $init = $message.data('init');

            $message.removeClass('install-now installed button-disabled updated-message')
                    .addClass('updating-message')
                    .html(colorway.btnActivating);

            // WordPress adds "Activate" button after waiting for 1000ms. So we will run our activation after that.
            setTimeout(function () {

                $.ajax({
                    url: colorway.ajaxUrl,
                    type: 'POST',
                    data: {
                        'action': 'colorway-sites-plugin-activate',
                        'init': $init,
                    },
                })
                        .done(function (result) {
                            if (result.success) {
                                //redirecting to colorway sites library
                                window.location.href = result.data.redirect_url;
                            } else {
                                $message.removeClass('updating-message');
                            }
                        });

            }, 1200);

        },

        /**
         * Install Now
         */
        _installNow: function (event) {
            $('.cwy-sites-notinstalled').addClass('updating-message');
            
            setTimeout(function () {
                $.ajax({
                    url: colorway.ajaxUrl,
                    type: 'POST',
                    data: {
                        'action': 'colorway-sites-plugins-install',
                    },
                    beforeSend: function () {
                        var new_processing = 'Processing ...';
                        $(".cwy-sites-notinstalled").html(new_processing);
                    },
                })
                        .done(function (response) {
                            if (response) {
                                window.location.href = response.data.redirect_url;
                            } else {
                                console.log("Colorway Sites Plugins installation failed");
                            }
                        });
            }, 2000);

        },
    };

    /**
     * Initialize ColorwayThemeAdmin
     */
    $(function () {
        ColorwayThemeAdmin.init();
    });

})(jQuery);

(function ($) {

    $.fn.grtyoutube = function (options) {

        return this.each(function () {

            // Get video ID
            var getvideoid = $(this).attr("youtubeid");

            // Default options
            var settings = $.extend({
                videoID: getvideoid,
                autoPlay: true,
                theme: "dark"
            }, options);

            // Convert some values
            if (settings.autoPlay === true) {
                settings.autoPlay = 1
            } else if (settings.autoPlay === false) {
                settings.autoPlay = 0
            }
            if (settings.theme === "dark") {
                settings.theme = "grtyoutube-dark-theme"
            } else if (settings.theme === "light") {
                settings.theme = "grtyoutube-light-theme"
            }

            // Initialize on click
            if (getvideoid) {
                $(this).on("click", function () {
                    $("body").append('<div class="grtyoutube-popup ' + settings.theme + '">' +
                            '<div class="grtyoutube-popup-content">' +
                            '<span class="grtyoutube-popup-close">X</span>' +
                            '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + settings.videoID + '?rel=0&wmode=transparent&autoplay=' + settings.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe>' +
                            '</div>' +
                            '</div>');
                });
            }

            // Close the box on click or escape
            $(this).on('click', function (event) {
                event.preventDefault();
                $(".grtyoutube-popup-close, .grtyoutube-popup").click(function () {
                    $(".grtyoutube-popup").remove();
                });
            });

            $(document).keyup(function (event) {
                if (event.keyCode == 27) {
                    $(".grtyoutube-popup").remove();
                }
            });
        });
    };

}(jQuery));

jQuery(document).ready(function () {
    jQuery(".youtube-link").grtyoutube({
        autoPlay: true,
        theme: "dark"
    });

});