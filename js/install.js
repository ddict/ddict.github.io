$(function() {
    var $chrome = $('#install_chrome');
    var $opera = $('#install_opera');
    var $firefox = $('#install_firefox');

    var $popup = $('#popup');

    $chrome.on('click', function(e) {
        ga('send', 'event', 'chrome', 'click');
        show();
        var url = e.currentTarget.href;

        if (typeof chrome === 'undefined') {
            location.href = url
            return;
        }

        chrome.webstore.install('', function() {
            //success
            hide();
        }, function() {
            //fail
            location.href = url;
        });
        return false;
    });

    $opera.on('click', function(e) {
        ga('send', 'event', 'opera', 'click');
        show();
        var url = e.currentTarget.href;

        if (typeof opr === 'undefined') {
            location.href = url
            return;
        }

        opr.addons.installExtension('fcfpagpiibkilokeihmaggjgheaemgbi', function() {
            //success
            hide();
        }, function() {
            //fail
            location.href = url;
        });
        return false;
    });

    $firefox.on('click', function(e) {
        ga('send', 'event', 'firefox', 'click');
        var url = e.currentTarget.href;
        location.href = url
        return;
    });

    function show() {
        var top = $(window).height() / 10 - $popup.height() / 2;
        var left = $(window).width() / 2 - $popup.width() / 2 - 15;

        $popup.css({
            top: top + 'px',
            left: left + 'px'
        });

        $popup.fadeIn();
    }

    function hide() {
        $popup.fadeOut();
    }
});