/**
 * @author Shaumik Daityari
 * @copyright Copyright © 2013 All rights reserved.
 */

var lazyload = lazyload || {};

(function($, lazyload) {

    "use strict";

    var page = 1,
        buttonId = ".btn-load",
        loadingId = ".loading-wrap",
        container = ".bl-portf__wrapper";

    lazyload.load = function() {

        var url = "./" + page + ".html";
 
        $(buttonId).hide();
        $(loadingId).show();

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() === "NONE") {
                    $(buttonId).fadeOut();
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(loadingId).text("Sorry, there was some error with the request. Please refresh the page.");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show();
        $(loadingId).hide();

        $(response).appendTo($(container));
        page += 1;
    };

})(jQuery, lazyload);