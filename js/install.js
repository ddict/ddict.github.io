$(function() {
    var $chrome = $('#install_chrome');
    var $opera  = $('#install_opera');

    var $popup  = $('#popup');

    $chrome.on('click', function(e) {
        show();
        var url = e.currentTarget.href;

        if(typeof chrome === 'undefined') {
            return location.href = url;
        }

        chrome.webstore.install('', function(){
            //success
            hide();
        }, function(){
            //fail
            location.href = url;
        });
        return false;
    });

    $opera.on('click', function(e) {
        show();
        var url = e.currentTarget.href;

        if(typeof opr === 'undefined') {
            return location.href = url;
        }

        opr.addons.installExtension('fcfpagpiibkilokeihmaggjgheaemgbi', function(){
            //success
            hide();
        }, function(err){
            //fail
            location.href = url;
        });
        return false;
    });

    function show() {
        var top = $(window).height()/10 - $popup.height()/2;
        var left = $(window).width()/2 - $popup.width()/2 - 15;

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