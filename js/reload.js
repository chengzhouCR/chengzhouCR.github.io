$(document).pjax('a', '#pjax-container', {
    fragment: '#pjax-container',
    timeout: 8000,
    success: function() {
        //重新加载JS
        $.getScript("cloudflare.js");
    }
});