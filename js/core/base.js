(function (doc, win) {
    // 分辨率Resolution适配
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };

    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
    // 一物理像素在不同屏幕的显示效果不一样。要根据devicePixelRatio来修改meta标签的scale,要注释上面的meta标签
    (function(){
        return;
        var dpr = scale =1;
         var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
           scale = 1 / dpr;
           
           // 
           var metaEl = "";
           metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    })();
        
})(document, window);

$(document).ready(function () {
    
    // $(".j-layer").each(function(){
    //     var layerHT = $(this).height();
    //     var layerWH = $(this).width();
    //     $(this).css({
    //         "margin-top":-(layerHT/2),
    //         "margin-left":-(layerWH/2)
    //     })
    // });
    $(".j-layer-close").click(function(){
        $(this).parents(".j-layer").hide();
        $(".mask-layer").hide();
    });
    // $(".fixlayer-tj").click(function(){
    //     $(".mask-layer").show();
    //     $(".friend-layer").show();
    // });
    $(".j-more").click(function(){
        if($(this).parents(".j-my-info").hasClass("on")) {
            $(this).parents(".j-my-info").removeClass("on");
            $(this).find('span').html("展开全部");
        }else {
            $(this).parents(".j-my-info").addClass("on");
            $(this).find('span').html("收起");
        }
    });
    $(".j-my-more").click(function(){
        $(this).hide();
        $(".j-my-more-box").show();
    });
    $(".j-login-layer").click(function(){
        $(".login-layer").hide();
    });

    /*顶部搜索*/
    $(".switch .switch-btn").click(function(){
        $('.switch-pop').show();
        $(".switch-btn").find(".narrow").addClass("on");

    });
    $(".switch-pop span").click(function(){
        $(".switch-btn").find(".narrow").removeClass("on");
        $(".switch-pop").hide();
        $(".switch-btn b").html($(this).find('b').html());
    });

    /*j-screen*/
    // $(".j-screen .screen-hd li").click(function(){
    //     var num = $(this).index();
    //     $(".j-screen .screen-hd li").removeClass("on");
    //     $(this).addClass('on');
    //     $(this).find("i").addClass('d');
    //     $(".j-screen .bd").hide();
    //     $(".j-screen .bd").eq(num).show();
    // });
});